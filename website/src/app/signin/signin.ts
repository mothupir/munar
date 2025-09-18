import { Component, OnInit, signal } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import decodeEkp from '../helpers/decrypt-ekp';
import { environment as env } from '../../environments/environment.development';

import { ProgressSpinner } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Aptos, AptosConfig, EphemeralKeyPair, KeylessAccount, Network } from '@aptos-labs/ts-sdk';
import encodeAccount from '../helpers/encode-account';

@Component({
  selector: 'app-signin',
  imports: [ProgressSpinner, FormsModule, CommonModule],
  templateUrl: './signin.html',
  styleUrl: './signin.css'
})
export class Signin implements OnInit {
  showSpinner = signal(true);

  constructor(
        private router: Router,
        private messageService: MessageService) { }

  async ngOnInit(): Promise<void> {
    const jwt = this.tryParseJwt(window.location.href);
    const jwtNonce = jwtDecode<{ nonce: string }>(jwt).nonce;

    const ekp = this.getLocalEkp();
    if (!ekp || ekp.nonce !== jwtNonce || ekp.isExpired()) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'No ephemeral key pair found. Please try signing in again.'});
    }

    await this.retrieveKeylessAccount(jwt, ekp!).then((account) => {
      console.error("Error retrieving keyless account 1");
      if (account) {
        localStorage.setItem("account", encodeAccount(account));
        this.router.navigate([localStorage.getItem('redirect') || '/']).then(() => {
          localStorage.removeItem('redirect');
          console.log("Reloading to update state");
          window.location.reload();
        });
      }
    }).catch((e) => {
      console.error("Error retrieving keyless account");
      this.messageService.add({severity:'error', summary: 'Aptos Error', detail: e.message || 'An unknown error occurred while retrieving your account.'});
    }).finally(() => {
      this.showSpinner.set(false);
    });
  }

  private async retrieveKeylessAccount(jwt: string, ekp: EphemeralKeyPair): Promise<KeylessAccount | undefined> {
    const aptos = new Aptos(new AptosConfig({ network: env.production ? Network.TESTNET : Network.DEVNET }));
    const account = await aptos?.deriveKeylessAccount({ jwt: jwt!, ephemeralKeyPair: ekp! });
    return account;
  }

  private getLocalEkp(): EphemeralKeyPair | undefined {
    const ekp = localStorage.getItem("ekp") ?? '';
    if (!decodeEkp) throw new Error("No EKP found");
    return decodeEkp ? decodeEkp(ekp) : undefined;
  }

  private tryParseJwt(url: string): string {
    const obj = new URL(url);
    const fragment = obj.hash.substring(1);
    const params = new URLSearchParams(fragment);
    return params.get('id_token') || '';
  }
}

import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Aptos, AptosConfig, Network, KeylessAccount, EphemeralKeyPair } from '@aptos-labs/ts-sdk';

@Injectable({
  providedIn: 'root'
})
export class AptosKeyless {
  private aptos: Aptos;

  constructor() {
    const config = new AptosConfig({
      network: environment.production ? Network.MAINNET : Network.TESTNET
    });
    this.aptos = new Aptos(config);
  }
}

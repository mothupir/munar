import { AfterContentInit, AfterViewInit, Component, OnInit, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { environment as env } from '../environments/environment.development';

import { Button } from 'primeng/button';
import { Menubar } from 'primeng/menubar';
import { MenuItem, MessageService, ConfirmationService } from 'primeng/api';
import { ConfirmPopup } from 'primeng/confirmpopup';
import { Toast } from 'primeng/toast';
import { Dialog } from 'primeng/dialog';
import { Checkbox } from 'primeng/checkbox';
import { EphemeralKeyPair } from '@aptos-labs/ts-sdk';
import encodeEkp from './helpers/encode-ekp';
import decodeAccount from './helpers/decode-account';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, Button, Menubar, Dialog, Toast, Checkbox, ConfirmPopup],
  providers: [MessageService, ConfirmationService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, AfterContentInit {
    protected readonly title = signal('Munar');
    items: MenuItem[] | undefined;
    selected: string | undefined = 'Dashboard';
    visible: boolean = false;
    keepAlive: boolean = false;
    signedIn = signal(false);

    constructor(
        private router: Router,
        private messageService: MessageService,
        private confirmationService: ConfirmationService) {
    }

    ngAfterContentInit() {
        this.checkAccount();
    }

    ngOnInit() {
         this.items = [
            {
                label: 'Dashboard',
                icon: 'pi pi-desktop',
                available: true
            },
            {
                label: 'Contracts',
                icon: 'pi pi-briefcase',
                available: true
            },
            {
                label: 'Investments',
                icon: 'pi pi-money-bill',
                available: true
            },
            {
                label: 'Admin',
                icon: 'pi pi-check-square',
                available: false
            },
        ];
    }

    confirmSignOut(event: Event) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to sign out?',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.signOut();
            },
            reject: () => {
                this.visible = false;
            }
        });
    }

    signOut() {
        localStorage.removeItem("account");
        this.signedIn.set(false);
        this.messageService.add({severity:'warn', summary: 'Signed Out', detail: 'You have been signed out.'});
        this.router.navigate(['/']);
    }

    signIn() {
        localStorage.setItem('redirect', this.router.url);

        const ekp = EphemeralKeyPair.generate();
        localStorage.setItem("ekp", encodeEkp(ekp));

        var signinUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=id_token&scope=openid+email+profile&nonce=${ekp.nonce}&redirect_uri=${env.redirectUrl}&client_id=${env.googleClientId}`;
        location.href = signinUrl;
    }

    checkAccount() {
        var encodedAccount = localStorage.getItem("account");
        if (encodedAccount) {
            console.log("Found existing account");
            const keylessAccount = decodeAccount(encodedAccount);
            this.signedIn.set(true);
            this.messageService.add({severity:'success', summary: 'Account', detail: `You are signed in!\n\n Public Key: ${keylessAccount.accountAddress}`, life: 3000});
        } else {
            this.messageService.add({severity:'warn', summary: 'Account', detail: 'You are not signed in!', life: 4000});
        }
    }

    showDialog() {
        this.visible = true;
    }

    show() {
        this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Message Content', life: 3000 });
    }

    selectionChanged(option: string) {
        this.selected = option;
        this.router.navigate([option.toLowerCase()]);
    }
}

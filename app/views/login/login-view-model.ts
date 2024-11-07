import { Observable } from '@nativescript/core';
import { AuthService } from '../../services/auth.service';
import { Frame } from '@nativescript/core';

export class LoginViewModel extends Observable {
    private authService: AuthService;
    public email: string = '';
    public password: string = '';

    constructor() {
        super();
        this.authService = new AuthService();
    }

    async onSignIn() {
        if (!this.email || !this.password) {
            alert('Please enter both email and password');
            return;
        }

        try {
            await this.authService.signIn(this.email, this.password);
            Frame.topmost().navigate({
                moduleName: 'views/chat/chat-page',
                clearHistory: true
            });
        } catch (error) {
            alert('Login failed: ' + error.message);
        }
    }

    async onGoogleSignIn() {
        try {
            await this.authService.signInWithGoogle();
            Frame.topmost().navigate({
                moduleName: 'views/chat/chat-page',
                clearHistory: true
            });
        } catch (error) {
            alert('Google sign in failed: ' + error.message);
        }
    }

    onRegister() {
        Frame.topmost().navigate('views/register/register-page');
    }
}
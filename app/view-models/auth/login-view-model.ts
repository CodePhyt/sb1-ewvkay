import { Observable, Frame } from '@nativescript/core';
import { AuthService } from '../../services/auth-service';

export class LoginViewModel extends Observable {
    private _email: string = '';
    private _password: string = '';
    private _isLoading: boolean = false;

    constructor() {
        super();
    }

    async onSignIn() {
        if (!this._email || !this._password) {
            alert('Please enter both email and password');
            return;
        }

        this._isLoading = true;
        this.notifyPropertyChange('isLoading', true);

        try {
            await AuthService.signInWithEmail(this._email, this._password);
            Frame.topmost().navigate({
                moduleName: 'views/chat-page',
                clearHistory: true
            });
        } catch (error) {
            alert('Login failed: ' + error.message);
        } finally {
            this._isLoading = false;
            this.notifyPropertyChange('isLoading', false);
        }
    }

    async onGoogleSignIn() {
        this._isLoading = true;
        this.notifyPropertyChange('isLoading', true);

        try {
            await AuthService.signInWithGoogle();
            Frame.topmost().navigate({
                moduleName: 'views/chat-page',
                clearHistory: true
            });
        } catch (error) {
            alert('Google sign in failed: ' + error.message);
        } finally {
            this._isLoading = false;
            this.notifyPropertyChange('isLoading', false);
        }
    }

    // ... rest of the code remains the same
}
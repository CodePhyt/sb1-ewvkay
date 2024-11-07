import { Observable, Frame } from '@nativescript/core';

export class RegisterViewModel extends Observable {
    private _fullName: string = '';
    private _email: string = '';
    private _password: string = '';
    private _confirmPassword: string = '';
    private _preferredLanguageIndex: number = 0;

    constructor() {
        super();
    }

    get languages(): string[] {
        return [
            'English', 'Spanish', 'German', 'Turkish', 
            'Hindi', 'French', 'Chinese', 'Japanese', 
            'Korean', 'Arabic'
        ];
    }

    async onRegister() {
        if (this._password !== this._confirmPassword) {
            // TODO: Show error message
            return;
        }

        // TODO: Implement actual registration
        Frame.topmost().navigate({
            moduleName: 'views/chat-page',
            clearHistory: true
        });
    }

    onTerms() {
        // TODO: Show terms and conditions
        console.log('Terms tapped');
    }

    onPrivacy() {
        // TODO: Show privacy policy
        console.log('Privacy tapped');
    }

    // Getters and setters for form fields
    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        if (this._fullName !== value) {
            this._fullName = value;
            this.notifyPropertyChange('fullName', value);
        }
    }

    // ... similar getters/setters for email, password, confirmPassword
}
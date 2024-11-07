import { Observable } from '@nativescript/core';
import { PrivacySettings } from '../models/user';

export class SettingsViewModel extends Observable {
    private _privacySettings: PrivacySettings;
    private _messageNotifications: boolean = true;
    private _meetingReminders: boolean = true;
    
    constructor() {
        super();
        this._privacySettings = {
            lastSeenVisibility: 'contacts',
            profilePhotoVisibility: 'contacts',
            onlineStatusVisibility: 'contacts',
            readReceipts: true,
            allowScreenSharing: true,
            allowGroupInvites: true,
            blockList: []
        };
    }

    get privacyOptions(): string[] {
        return ['Everyone', 'Contacts', 'Nobody'];
    }

    get languages(): string[] {
        return [
            'English', 'Spanish', 'German', 'Turkish', 
            'Hindi', 'French', 'Chinese', 'Japanese', 
            'Korean', 'Arabic'
        ];
    }

    get lastSeenVisibilityIndex(): number {
        return this.privacyOptions.indexOf(
            this.capitalizeFirst(this._privacySettings.lastSeenVisibility)
        );
    }

    set lastSeenVisibilityIndex(value: number) {
        this._privacySettings.lastSeenVisibility = 
            this.privacyOptions[value].toLowerCase() as any;
        this.notifyPropertyChange('lastSeenVisibilityIndex', value);
    }

    async clearHistory(): Promise<void> {
        // TODO: Implement chat history clearing
        console.log('Clearing chat history...');
    }

    private capitalizeFirst(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
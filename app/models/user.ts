export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber?: string;
    preferredLanguage: string;
    avatar?: string;
    status: 'online' | 'offline' | 'busy' | 'in-meeting';
    privacySettings: PrivacySettings;
    lastSeen?: Date;
    presence: UserPresence;
}

export interface PrivacySettings {
    lastSeenVisibility: 'everyone' | 'contacts' | 'nobody';
    profilePhotoVisibility: 'everyone' | 'contacts' | 'nobody';
    onlineStatusVisibility: 'everyone' | 'contacts' | 'nobody';
    readReceipts: boolean;
    allowScreenSharing: boolean;
    allowGroupInvites: boolean;
    blockList: string[];
}

export interface UserPresence {
    isTyping?: boolean;
    currentActivity?: string;
    customStatus?: string;
    availableForMeeting: boolean;
}
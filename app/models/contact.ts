export interface Contact {
    userId: string;
    name: string;
    email: string;
    phoneNumber?: string;
    tags: string[];
    notes?: string;
    company?: string;
    department?: string;
    favorite: boolean;
    blocked: boolean;
    mutualGroups: string[];
    connectionDate: Date;
}

export interface ContactGroup {
    id: string;
    name: string;
    description?: string;
    members: string[];
    admins: string[];
    settings: GroupSettings;
    createdAt: Date;
    updatedAt: Date;
}

export interface GroupSettings {
    allowMemberInvites: boolean;
    allowScreenSharing: boolean;
    defaultLanguage: string;
    messageRetention: number; // days
    requireAdminApproval: boolean;
}
import { Observable } from '@nativescript/core';
import { Contact, ContactGroup } from '../models/contact';

export class ContactService extends Observable {
    private contacts: Contact[] = [];
    private groups: ContactGroup[] = [];

    async searchContacts(query: string): Promise<Contact[]> {
        return this.contacts.filter(contact => 
            contact.name.toLowerCase().includes(query.toLowerCase()) ||
            contact.email.toLowerCase().includes(query.toLowerCase()) ||
            contact.company?.toLowerCase().includes(query.toLowerCase())
        );
    }

    async getContactsByTag(tag: string): Promise<Contact[]> {
        return this.contacts.filter(contact => 
            contact.tags.includes(tag)
        );
    }

    async createGroup(name: string, members: string[]): Promise<ContactGroup> {
        const group: ContactGroup = {
            id: Date.now().toString(),
            name,
            members,
            admins: [/* current user id */],
            settings: {
                allowMemberInvites: true,
                allowScreenSharing: true,
                defaultLanguage: 'en',
                messageRetention: 365,
                requireAdminApproval: false
            },
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.groups.push(group);
        return group;
    }
}
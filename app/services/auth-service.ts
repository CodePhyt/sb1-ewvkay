import { firebase } from '@nativescript/firebase';
import { User } from '../models/user';

export class AuthService {
    static async signInWithEmail(email: string, password: string): Promise<User> {
        try {
            const result = await firebase.auth().signInWithEmailAndPassword(email, password);
            return this.createUserFromFirebase(result.user);
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    static async signInWithGoogle(): Promise<User> {
        try {
            const result = await firebase.auth().signInWithGoogle({});
            return this.createUserFromFirebase(result.user);
        } catch (error) {
            console.error('Google sign in error:', error);
            throw error;
        }
    }

    static async registerUser(email: string, password: string, fullName: string): Promise<User> {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(email, password);
            await result.user.updateProfile({
                displayName: fullName
            });
            return this.createUserFromFirebase(result.user);
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    private static createUserFromFirebase(firebaseUser: any): User {
        return {
            id: firebaseUser.uid,
            name: firebaseUser.displayName || '',
            email: firebaseUser.email || '',
            preferredLanguage: 'en',
            status: 'online',
            privacySettings: {
                lastSeenVisibility: 'contacts',
                profilePhotoVisibility: 'contacts',
                onlineStatusVisibility: 'contacts',
                readReceipts: true,
                allowScreenSharing: true,
                allowGroupInvites: true,
                blockList: []
            },
            presence: {
                isTyping: false,
                availableForMeeting: true
            }
        };
    }
}
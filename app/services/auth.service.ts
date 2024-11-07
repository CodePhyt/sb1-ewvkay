import { firebase } from '@nativescript/firebase-core';
import { 
    getAuth, 
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider
} from '@nativescript/firebase-auth';

export class AuthService {
    private auth = getAuth(firebase.app());

    async signIn(email: string, password: string) {
        try {
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }

    async signInWithGoogle() {
        try {
            const provider = new GoogleAuthProvider();
            const userCredential = await this.auth.signInWithProvider(provider);
            return userCredential.user;
        } catch (error) {
            console.error('Google sign in error:', error);
            throw error;
        }
    }

    async register(email: string, password: string) {
        try {
            const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }
}
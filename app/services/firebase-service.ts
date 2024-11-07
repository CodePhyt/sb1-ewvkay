import { firebase } from '@nativescript/firebase';

export async function initializeFirebase() {
    const firebaseConfig = {
        // Your Firebase config will go here
        // You'll need to add your own Firebase configuration
        persistence: true,
        storageBucket: 'gs://linguallink.appspot.com',
        projectId: "linguallink"
    };

    await firebase.init(firebaseConfig);
}
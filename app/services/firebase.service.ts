import { firebase } from '@nativescript/firebase-core';

export async function initializeFirebase() {
    const config = {
        iOSOptions: {
            bundleId: 'org.nativescript.linguallink'
        },
        androidOptions: {
            packageName: 'org.nativescript.linguallink'
        }
    };

    await firebase.initializeApp(config);
}
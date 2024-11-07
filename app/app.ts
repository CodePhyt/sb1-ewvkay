import { Application } from '@nativescript/core';
import { initializeFirebase } from './services/firebase.service';

initializeFirebase()
  .catch(error => console.error('Firebase initialization error:', error))
  .finally(() => {
    Application.run({ moduleName: 'app-root' });
  });
import { NavigatedData, Page } from '@nativescript/core';
import { ChatViewModel } from '../view-models/chat-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new ChatViewModel();
}

export function onSettings() {
    // TODO: Implement settings page navigation
    console.log('Settings tapped');
}
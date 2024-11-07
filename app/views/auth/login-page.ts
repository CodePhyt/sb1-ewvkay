import { NavigatedData, Page } from '@nativescript/core';
import { LoginViewModel } from '../../view-models/auth/login-view-model';

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new LoginViewModel();
}
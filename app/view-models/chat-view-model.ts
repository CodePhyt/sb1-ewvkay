import { Observable } from '@nativescript/core';
import { ChatMessage, User } from '../models/chat-message';
import { TranslationService } from '../services/translation-service';

export class ChatViewModel extends Observable {
    private messages: ChatMessage[] = [];
    private currentUser: User;
    private translationService: TranslationService;

    constructor() {
        super();
        this.translationService = new TranslationService();
        this.currentUser = {
            id: 'user1',
            name: 'John Doe',
            preferredLanguage: 'en',
            status: 'online'
        };
    }

    async sendMessage(content: string) {
        const message: ChatMessage = {
            id: Date.now().toString(),
            senderId: this.currentUser.id,
            content,
            translatedContent: {},
            timestamp: new Date(),
            originalLanguage: this.currentUser.preferredLanguage
        };

        // Simulate message translation
        for (const lang of this.translationService.getAvailableLanguages()) {
            if (lang !== message.originalLanguage) {
                message.translatedContent[lang] = await this.translationService
                    .translateText(content, message.originalLanguage, lang);
            }
        }

        this.messages.push(message);
        this.notifyPropertyChange('messages', this.messages);
    }

    getMessages(): ChatMessage[] {
        return this.messages;
    }
}
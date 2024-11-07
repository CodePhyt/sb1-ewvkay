export interface ChatMessage {
    id: string;
    senderId: string;
    content: string;
    translatedContent: { [key: string]: string };
    timestamp: Date;
    originalLanguage: string;
}

export interface User {
    id: string;
    name: string;
    preferredLanguage: string;
    avatar?: string;
    status: 'online' | 'offline' | 'busy';
}
import { Observable } from '@nativescript/core';

export interface Meeting {
    id: string;
    participants: string[];
    startTime: Date;
    endTime?: Date;
    title: string;
    description?: string;
    isScreenSharing: boolean;
    recordingEnabled: boolean;
}

export class MeetingService extends Observable {
    private activeMeetings: Map<string, Meeting> = new Map();

    async startMeeting(participants: string[]): Promise<Meeting> {
        const meeting: Meeting = {
            id: Date.now().toString(),
            participants,
            startTime: new Date(),
            title: 'New Meeting',
            isScreenSharing: false,
            recordingEnabled: false
        };
        this.activeMeetings.set(meeting.id, meeting);
        return meeting;
    }

    async toggleScreenSharing(meetingId: string): Promise<boolean> {
        const meeting = this.activeMeetings.get(meetingId);
        if (meeting) {
            meeting.isScreenSharing = !meeting.isScreenSharing;
            return meeting.isScreenSharing;
        }
        return false;
    }

    async endMeeting(meetingId: string): Promise<void> {
        const meeting = this.activeMeetings.get(meetingId);
        if (meeting) {
            meeting.endTime = new Date();
            this.activeMeetings.delete(meetingId);
        }
    }
}
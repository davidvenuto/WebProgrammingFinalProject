import users from '@/data/users.json';

export interface Activity {
    "title": string;
    "date": string;
    "duration_minutes": number;
    "location": string;
    "activity_type": string;
    "distance_miles": number;
}

export interface User {
    "name": string;
    "password": string;
    "username": string;
    "email": string;
    "gender": string;
    "weight": number;
    "profilePicture": string;
    "isAdmin": boolean;
    "activities": Activity[];
}

export function getUser(): User[] {
    return users.items;
}
import users from '@/data/users.json';

export interface User {
    "name": string;
    "password": string;
    "username": string;
    "email": string;
    "gender": string;
    "weight": number;
    "profile-picture": string;
}

export function getUser(): User[] {
    return users.items;
}
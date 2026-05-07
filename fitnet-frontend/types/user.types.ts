// src/types/user.types.ts

export interface IUser {
  id: number;
  email: string;
  name: string;
  role: 'USER' | 'TRAINER' | 'ADMIN';
  avatarUrl?: string;
  bio?: string;
  createdAt?: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}

export type UserRole = 'USER' | 'TRAINER' | 'ADMIN';
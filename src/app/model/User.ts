import { UserActivity } from "./UserActivity";

export interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  lastname: string;
  password: string;
  createdAt: string;
  bio: string;
  birthday: string;
  picturePath: string;
  userActivity: UserActivity;
  reviewCount: number
  _links: { self: { href: string }, user: { href: string }, reviews: { href: string } };
}
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
  _links: { self: { href: {} }, user: { href: {} }, reviews: { href: {} } };
}
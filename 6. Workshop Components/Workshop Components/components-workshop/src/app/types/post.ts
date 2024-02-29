import { Theme } from './theme';
import { UserID } from './user-id';

export interface Post {
  likes: string[];
  _id: string;
  text: string;
  userId: UserID;
  themeId: Theme;
  created_at: string;
  updatedAt: string;
  __v: number;
}

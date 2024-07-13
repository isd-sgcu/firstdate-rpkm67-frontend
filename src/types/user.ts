import { ChildCheckIn } from './checkIn';
import { Stamp } from './stamp';

export type User = {
  baan: string;
  checkIns: ChildCheckIn[];
  drug_allergy: string;
  email: string;
  faculty: string;
  firstname: string;
  food_allergy: string;
  group_id: string;
  id: string;
  illness: string;
  lastname: string;
  nickname: string;
  parent: string;
  parent_tel: string;
  photo_key: string;
  photo_url: string;
  receive_gift: number;
  role: 'user' | 'staff';
  stamp: Stamp;
  tel: string;
  title: string;
  year: number;
};

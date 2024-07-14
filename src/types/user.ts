import { ChildCheckIn } from './checkIn';
import { Stamp } from './stamp';

export type User = {
  baan: string;
  checkIns: ChildCheckIn[];
  drugAllergy: string;
  email: string;
  faculty: string;
  firstname: string;
  foodAllergy: string;
  groupId: string;
  id: string;
  illness: string;
  lastname: string;
  nickname: string;
  parent: string;
  parentTel: string;
  photoKey: string;
  photoUrl: string;
  receiveGift: number;
  role: 'user' | 'staff';
  stamp: Stamp;
  tel: string;
  title: string;
  year: number;
};

import { User } from '@/types/user';

import { StampDTO } from './stampDTO';
import { ChildCheckInDTO, ChildCheckInParser } from './checkInsDTO';

export type UserDTO = {
  baan: string;
  check_ins: ChildCheckInDTO[] | null;
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
  stamp: StampDTO;
  tel: string;
  title: string;
  year: number;
};

export const UserParser = (userDTO: UserDTO): User => {
  return {
    baan: userDTO.baan,
    checkIns:
      userDTO.check_ins?.map((checkIn) => ChildCheckInParser(checkIn)) ?? [],
    drugAllergy: userDTO.drug_allergy,
    email: userDTO.email,
    faculty: userDTO.faculty,
    firstname: userDTO.firstname,
    foodAllergy: userDTO.food_allergy,
    groupId: userDTO.group_id,
    id: userDTO.id,
    illness: userDTO.illness,
    lastname: userDTO.lastname,
    nickname: userDTO.nickname,
    parent: userDTO.parent,
    parentTel: userDTO.parent_tel,
    photoKey: userDTO.photo_key,
    photoUrl: userDTO.photo_url,
    receiveGift: userDTO.receive_gift,
    role: userDTO.role,
    stamp: {
      id: userDTO.stamp.id,
      pointA: userDTO.stamp.point_a,
      pointB: userDTO.stamp.point_b,
      pointC: userDTO.stamp.point_c,
      pointD: userDTO.stamp.point_d,
      stamp: userDTO.stamp.stamp,
      userId: userDTO.stamp.user_id,
    },
    tel: userDTO.tel,
    title: userDTO.title,
    year: userDTO.year,
  };
};

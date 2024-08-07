import { User } from '@/types/user';

export type Status = 'ready' | 'not-ready' | 'recieved' | 'isStaff';

export const getReceiveGiftCondition = (
  user: User
): { score: number; status: Status } => {
  if (!user) {
    throw new Error('there is no user');
  }

  if (user.role == 'staff') {
    return {
      score: 0,
      status: 'isStaff',
    };
  }

  let workshop = 0;
  let landmark = 0;
  let club = 0;

  Array.from(user.stamp.stamp).forEach((point, index) => {
    if (index < 5) {
      workshop += parseInt(point);
    } else if (index < 9) {
      landmark += parseInt(point);
    } else {
      club += parseInt(point);
    }
  });

  const score = workshop + club + landmark;
  const isReceivedGift = user.receiveGift > 0;
  const isValidPoint = !!workshop && !!club && !!landmark && score >= 6;

  let status: Status;
  if (isReceivedGift) {
    status = 'recieved';
  } else if (isValidPoint) {
    status = 'ready';
  } else {
    status = 'not-ready';
  }

  return {
    score,
    status,
  };
};

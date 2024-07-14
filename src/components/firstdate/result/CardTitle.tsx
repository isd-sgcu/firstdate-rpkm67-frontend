import { getCard } from '@/utils/cardUtils';

import { Stamp } from '@/types/stamp';
import Card from '@/types/card';

const CardTitle = ({ stamp }: { stamp: Stamp | undefined }) => {
  const getCardTitle = (stamp: Stamp | undefined) => {
    const card = getCard(stamp);

    switch (card) {
      case Card.Sprout:
        return 'Sprout';
      case Card.Daisies:
        return 'Daisies';
      case Card.Rose:
        return 'Rose';
      case Card.Sunflower:
        return 'Sunflower';
      case Card.Tulip:
        return 'Tulip';
      case Card.Fortune:
        return 'Fortune';
      default:
        return 'Sprout';
    }
  };

  const title = getCardTitle(stamp);

  return (
    <h2 className="font-season italic mb-2 text-2xl text-light-gray">
      {title}
    </h2>
  );
};
export default CardTitle;

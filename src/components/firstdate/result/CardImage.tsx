import Image from 'next/image';
import { getCard } from '@/utils/cardUtils';

import { Stamp } from '@/types/stamp';
import Card from '@/types/card';

import SproutImage from '@public/ending/sprout.png';
import DaisiesImage from '@public/ending/daisies.png';
import RoseImage from '@public/ending/rose.png';
import SunflowerImage from '@public/ending/sunflower.png';
import TulipImage from '@public/ending/tulip.png';
import FortuneImage from '@public/ending/fortune.png';

const CardImage = ({ stamp }: { stamp: Stamp | undefined }) => {
  const getCardImage = (stamp: Stamp | undefined) => {
    const card = getCard(stamp);

    switch (card) {
      case Card.Sprout:
        return SproutImage;
      case Card.Daisies:
        return DaisiesImage;
      case Card.Rose:
        return RoseImage;
      case Card.Sunflower:
        return SunflowerImage;
      case Card.Tulip:
        return TulipImage;
      case Card.Fortune:
        return FortuneImage;
      default:
        return SproutImage;
    }
  };

  const card = getCardImage(stamp);

  return (
    <Image
      src={card}
      alt="result card"
      className="w-48"
    />
  );
};

export default CardImage;

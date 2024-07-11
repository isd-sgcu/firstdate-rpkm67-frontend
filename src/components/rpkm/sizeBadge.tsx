import { Icon } from '@iconify/react';

interface BadgeProps {
  baanSize: 'S' | 'M' | 'L' | 'XL' | 'XXL';
}

const badgeColors = {
  S: 'text-[#EAE3C3]',
  M: 'text-[#EFD08B]',
  L: 'text-[#67AB88]',
  XL: 'text-[#EB9096]',
  XXL: 'text-[#414643]',
};

export default function badge(props: BadgeProps) {
  const { baanSize } = props;
  const badgeColor = badgeColors[baanSize];
  return (
    <>
      <Icon
        icon="typcn:starburst"
        className={badgeColor}
      ></Icon>
    </>
  );
}

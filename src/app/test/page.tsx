import BaanCard from '@/components/rpkm/baanCard';
import baanExample from '@/../public/baanCard/baanExample.svg';

export default function page() {
  return (
    <div className="grid grid-rows-2 grid-cols-3 gap-y-4 m-10">
      <BaanCard
        name="Boe"
        size="S"
        image={baanExample}
        number={20}
        isShake={false}
      />
      <BaanCard
        name="Boe"
        size="M"
        image={baanExample}
        number={45}
        isShake={false}
      />
      <BaanCard
        name="Boe"
        size="L"
        image={baanExample}
        number={122}
        isShake={false}
      />
      <BaanCard
        name="Yim"
        size="XL"
        image={baanExample}
        number={298}
        isShake={false}
      />
      <BaanCard
        name="SoeiTee"
        size="XXL"
        image={baanExample}
        number={375}
        isShake={false}
      />
    </div>
  );
}

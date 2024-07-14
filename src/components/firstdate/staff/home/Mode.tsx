import { StaffHomeMode } from '@/app/firstdate/staff/home/page';
import { cn } from '@/lib/utils';

interface ModeInterface {
  variant: StaffHomeMode;
  mode: StaffHomeMode;
  handleOnClick: (mode: StaffHomeMode) => void;
}

export default function Mode(props: ModeInterface) {
  const { variant, mode, handleOnClick } = props;
  return (
    <button
      onClick={() => handleOnClick(variant)}
      className={cn('w-1/2 rounded-3xl py-1 text-center', {
        'text-white bg-project-light-gray': mode === variant,
      })}
    >
      {variant}
    </button>
  );
}

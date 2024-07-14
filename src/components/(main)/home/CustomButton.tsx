import { cn } from '@/lib/utils';
import { createEbookCount } from '@/utils/count';
import { useRouter } from 'next/navigation';
import React from 'react';

interface CustomButtonProps {
  varient: 'first-date' | 'rub-peun' | 'e-book' | 'contact-list';
  className?: string;
  children: React.ReactNode;
  registered?: boolean;
  setWaitModal?: (value: boolean) => void;
  setEvent?: (value: 'first-date' | 'rup-peun') => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  varient = 'first-date',
  className,
  children,
  registered,
  setWaitModal,
  setEvent,
}) => {
  const router = useRouter();
  const firstdate = () => {
    const currentDate = new Date();
    let firstDateDate = currentDate;
    const firstDate = process.env.NEXT_PUBLIC_FIRST_DATE_DATE;
    if (firstDate) {
      firstDateDate = new Date(firstDate);
    }
    if (currentDate >= firstDateDate) {
      if (registered) router.push('/firstdate/home');
      else router.push('/register');
    } else if (setWaitModal && setEvent) {
      setEvent('first-date');
      setWaitModal(true);
    }
  };
  const rubpeun = () => {
    const currentDate = new Date();
    let rupPeunDate = currentDate;
    const rupPeun = process.env.NEXT_PUBLIC_RUP_PEUN_DATE;
    if (rupPeun) {
      rupPeunDate = new Date(rupPeun);
    }
    if (currentDate >= rupPeunDate) {
      if (registered) console.log('registered');
      else router.push('/register');
    } else if (setWaitModal && setEvent) {
      setEvent('rup-peun');
      setWaitModal(true);
    }
  };
  const ebook = () => {
    window.open('https://th.y8.com/', '_blank');
    createEbookCount();
  };
  const contactlist = () => {
    router.push('/emergency-contact');
  };
  const buttonProps = {
    'first-date': {
      color: 'bg-project-pink',
      onClick: firstdate,
    },
    'rub-peun': {
      color: 'bg-project-apricot',
      onClick: rubpeun,
    },
    'e-book': {
      color: 'bg-project-cream',
      onClick: ebook,
    },
    'contact-list': {
      color: 'bg-[#313131]',
      onClick: contactlist,
    },
  };
  const { color, onClick } = buttonProps[varient];
  return (
    <button
      className={`${color} w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center hover:brightness-105`}
      onClick={onClick}
    >
      <div
        className={cn('flex space-x-1 justify-center items-center', className)}
      >
        {children}
      </div>
    </button>
  );
};

export default CustomButton;

import { cn } from '@/lib/utils';

interface ModalProps {
  variant: 'red' | 'blue';
  open: boolean;
  setOpen: (open: boolean) => void;
  callBackFunction: () => void;
  children: React.ReactNode;
}

const modalStyles = {
  red: {
    background: 'bg-[#C94B4B]',
    button: {
      'accept-background': 'bg-[#183F86]',
      'accept-border': 'bg-[#F5F5F5]',
      'cancel-background': 'bg-[#F5F5F5]',
      'cancel-border': 'bg-[#414643]',
    },
  },
  blue: {
    background: 'bg-[#183F86]',
    button: {
      'accept-background': 'bg-[#C94B4B]',
      'accept-border': 'bg-[#EAE3C3]',
      'cancel-background': 'bg-[#313131] text-[#F5F5F5]',
      'cancel-border': 'bg-[#F5F5F5]',
    },
  },
};

const Modal: React.FC<ModalProps> = ({
  variant,
  open,
  setOpen,
  callBackFunction,
  children,
}) => {
  const { background, button } = modalStyles[variant];

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="p-1 inv-rad inv-rad-3 bg-[#EAE3C3] min-w-[60%]">
        <div className={cn('inv-rad inv-rad-3 p-3', background)}>
          {children}
          <div className="flex flex-row gap-x-3 justify-center mt-3">
            <button
              onClick={() => setOpen(false)}
              className={cn(
                'p-1 inv-rad inv-rad-2 w-2/5',
                button['cancel-border']
              )}
            >
              <div
                className={cn(
                  'py-[0.3rem] px-2 inv-rad inv-rad-2',
                  button['cancel-background']
                )}
              >
                ยกเลิก
              </div>
            </button>
            <button
              onClick={() => callBackFunction()}
              className={cn(
                'text-white p-1 inv-rad inv-rad-2 w-2/5',
                button['accept-border']
              )}
            >
              <div
                className={cn(
                  'py-[0.3rem] px-2 inv-rad inv-rad-2',
                  button['accept-background']
                )}
              >
                ยืนยัน
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

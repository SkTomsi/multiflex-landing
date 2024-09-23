import { ArrowUpRight } from 'lucide-react';

interface IRoundedButton {
  buttonText: string;
}

function RoundedButton({ buttonText }: IRoundedButton) {
  return (
    <div className="group flex w-fit cursor-pointer items-center gap-x-2 rounded-full bg-secondary px-4 py-3 transition-all duration-300 ease-in-out">
      <div className="flex size-3 items-center justify-center rounded-full bg-primary transition-all duration-300 ease-in-out group-hover:size-8 ">
        <ArrowUpRight className="hidden text-white group-hover:block" />
      </div>
      <div className="text-sm transition-all duration-300 ease-in-out">
        {buttonText}
      </div>
    </div>
  );
}

export default RoundedButton;

import { HiMiniArrowUpRight } from "react-icons/hi2";

interface Props {
  className: string;
}

export const Button = ({ className }: Props) => {
  return (
    <button
      type="button"
      className={`${className} text-[.95rem] md:text-[1rem] lg:text-[1.05rem] font-semibold py-3 px-4 rounded-md uppercase`}
    >
      Register <HiMiniArrowUpRight size={28} className={`inline-flex`} />
    </button>
  );
};

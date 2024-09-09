import { BiGridVertical } from "react-icons/bi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
function CardWrapper({ children, className, rightIcon = true }) {
  return (
    <div>
      <div
        className={`rounded-3xl bg-[#78808a]/30 relative h-[35vh] max-h-[250px] lg:max-h-[300px] xl:max-h-[400px] ${className}  2xl:px-12 py-4 px-10  w-[50vw] lg:w-[42vw] xl:w-[40vw] overflow-hidden shadow-[8.0px_4.0px_2.0px_rgba(0,0,0,0.8)]`}
      >
        <AiOutlineQuestionCircle
          title="Any Questions?"
          className="absolute cursor-pointer top-4 left-2 text-[#78808a]"
          size={25}
        />

        <BiGridVertical
          className="text-[#4a4e54] absolute -translate-y-1/2 top-1/2 left-0"
          size={40}
        />

        {rightIcon && (
          <div className="rounded-full w-2 h-16 bg-red-400 absolute right-3 top-1/3 bg-gradient-to-b from-[#868687] to-[#43484e]"></div>
        )}

        {children}
      </div>

      <hr className="rounded lg:border-t-[2px] xl:border-t-4 border-t-[#36393c] w-[90%] mx-auto my-4" />
    </div>
  );
}

export default CardWrapper;

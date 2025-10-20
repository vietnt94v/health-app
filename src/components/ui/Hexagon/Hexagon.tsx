import type { HexagonProps } from "./Hexagon.types";

const Hexagon: React.FC<HexagonProps> = ({ label, iconUrl, onClick }) => {
  return (
    <>
      <div
        className="relative flex flex-col justify-center items-center w-[116px] h-[134px] shadow-md [clip-path:var(--clip-hex)] bg-[linear-gradient(90deg,#ffcc21_8.26%,#ff963c_91.18%)] cursor-pointer"
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        <div className="size-[56px]">
          <img
            src={iconUrl}
            alt={label}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-[20px]/[24px] font-normal text-light capitalize">
          {label}
        </span>
      </div>
    </>
  );
};

export default Hexagon;

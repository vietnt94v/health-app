import { type HeroCardProps } from "./HeroCard.types";

const HeroCard = (props: HeroCardProps) => {
  return (
    <>
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <img
            src={props.imgUrl}
            alt={`Image for ${props.type}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute left-0 bottom-0 bg-primary-300 text-light text-[15px]/[18px] px-2 py-[7px]">
          <span>{props.time}.</span>
          <span>{props.type}</span>
        </div>
      </div>
    </>
  );
};

export default HeroCard;

import { Link } from "react-router-dom";
import type { BlogCardProps } from "./BlogCard.types";

const Card = (props: BlogCardProps) => {
  return (
    <>
      <div className="cursor-pointer">
        <div className="relative mb-2">
          <div className="absolute bottom-0 left-0 z-20">
            <div className="bg-primary-300 text-light text-[15px] font-normal px-2 space-x-3 py-[0.75px]">
              <span>{props.date}</span>
              <span>{props.time}</span>
            </div>
          </div>
          <div className="aspect-16/10 overflow-hidden">
            <img
              src={props.imgUrl}
              alt={props.title}
              className="w-full h-full object-cover hover:scale-110 transform duration-300"
            />
          </div>
        </div>
        <h2 className="text-[15px]/[22px] text-dark-500 line-clamp-2 mb-1">
          {props.title}
        </h2>
        <div className="flex space-x-2">
          {props.tags?.map(tag => (
            <Link to={"#"} key={tag}>
              <span className="text-primary-400 cursor-pointer">#{tag}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;

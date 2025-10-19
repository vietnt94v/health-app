import { CircleProgress } from "@/components/ui";
import D01 from "@/assets/images/d01.jpg";

const Progress = () => {
  return (
    <>
      <div className="relative h-full w-full overflow-hidden">
        <img src={D01} alt="D01" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center">
          <CircleProgress percent={85} date="05/21" />
        </div>
      </div>
    </>
  );
};

export default Progress;

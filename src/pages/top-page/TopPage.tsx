import Category from "./Category";
import Progress from "./Progress";
import Track from "./Track";

const TopPage = () => {
  return (
    <>
      <div className="block">
        <div className="grid grid-cols-12 h-[312px] w-full">
          <div className="col-span-5 overflow-hidden">
            <Progress />
          </div>
          <div className="col-span-7">
            <Track />
          </div>
        </div>
        <div className="container">
          <div className="x"></div>
          <div className="x">
            <Category />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPage;

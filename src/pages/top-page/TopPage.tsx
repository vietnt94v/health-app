import Category from "./Category";
import Progress from "./Progress";
import Track from "./Track";

const TopPage = () => {
  return (
    <>
      <div className="block">
        <div className="grid grid-cols-1 grid-rows-2 lg:grid-rows-none lg:grid-cols-12 h-[600px] lg:h-[312px]">
          <div className="lg:col-span-5 overflow-hidden">
            <Progress />
          </div>
          <div className="lg:col-span-7">
            <div className="bg-dark-600 px-4 lg:px-13 pt-3 pb-4 lg:pr-25 h-full">
              <Track />
            </div>
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

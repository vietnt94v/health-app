import Health from "./Health";
import NavRecomend from "./NavRecommend";

const Column = () => {
  return (
    <>
      <div className="container">
        <div className="space-y-14">
          <NavRecomend />
          <Health />
        </div>
      </div>
    </>
  );
};

export default Column;

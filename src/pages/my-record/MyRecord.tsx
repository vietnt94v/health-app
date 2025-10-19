import NavigationRecord from "./Navigation";
import BodyRecord from "./BodyRecord";
import MyExercise from "./MyExercise";
import MyDiary from "./MyDiary";

const MyRecord = () => {
  return (
    <>
      <div className="container">
        <div className="space-y-14">
          <NavigationRecord />
          <BodyRecord />
          <MyExercise />
          <MyDiary />
        </div>
      </div>
    </>
  );
};

export default MyRecord;

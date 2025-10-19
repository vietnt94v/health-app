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
          <section id="body-record" className="section-scroll-mt">
            <BodyRecord />
          </section>
          <section id="my-exercise" className="section-scroll-mt">
            <MyExercise />
          </section>
          <section id="my-diary" className="section-scroll-mt">
            <MyDiary />
          </section>
        </div>
      </div>
    </>
  );
};

export default MyRecord;

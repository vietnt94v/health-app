import { RecordCard } from "@/components/ui";
import MyRecommend1 from "@/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "@/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "@/assets/images/MyRecommend-3.jpg";

const NavigationRecord = () => {
  const myRecordCards = [
    {
      imgUrl: MyRecommend1,
      title: "BODY RECORD",
      subTitle: "自分のカラダの記録",
    },
    {
      imgUrl: MyRecommend2,
      title: "MY EXERCISE",
      subTitle: "自分の運動の記録",
    },
    { imgUrl: MyRecommend3, title: "MY DIARY", subTitle: "自分の日記" },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-12 pt-14">
        {myRecordCards.map((card, index) => (
          <RecordCard
            key={index}
            imgUrl={card.imgUrl}
            title={card.title}
            subTitle={card.subTitle}
          />
        ))}
      </div>
    </>
  );
};

export default NavigationRecord;

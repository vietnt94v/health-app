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
      id: "body-record",
    },
    {
      imgUrl: MyRecommend2,
      title: "MY EXERCISE",
      subTitle: "自分の運動の記録",
      id: "my-exercise",
    },
    {
      imgUrl: MyRecommend3,
      title: "MY DIARY",
      subTitle: "自分の日記",
      id: "my-diary",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-12 pt-14">
        {myRecordCards.map((card, index) => (
          <a key={index} href={`#${card.id}`}>
            <RecordCard
              imgUrl={card.imgUrl}
              title={card.title}
              subTitle={card.subTitle}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default NavigationRecord;

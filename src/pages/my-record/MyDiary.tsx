import Button from "@/components/ui/Button/Button";

const MyDiary = () => {
  const myDiary = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: "私の日記の記録が一部表示されます。",
    content:
      "キストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
    date: "2021.05.21",
    time: "23:25",
  }));

  return (
    <>
      <div className="mb-14">
        <h2 className="text-[22px]/[27px] mb-1">MY DIARY</h2>
        <div className="grid grid-cols-4 gap-3 mb-[30px]">
          {myDiary.map(diary => (
            <div
              key={diary.id}
              className="border-2 border-gray-400 p-4 aspect-square text-dark-500"
            >
              <div className="text-[18px] flex flex-col mb-2">
                <span>{diary.date}</span>
                <span>{diary.time}</span>
              </div>
              <div className="text-[12px]/[17px]">
                <h3>{diary.title}</h3>
                <p className="line-clamp-5">{diary.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button>自分の日記をもっと見る</Button>
        </div>
      </div>
    </>
  );
};

export default MyDiary;

const MyExercise = () => {
  const bodyRecords = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    label: `家事全般（立位・軽い`,
    calories: Math.floor(Math.random() * 100),
    duration: `${Math.floor(Math.random() * 30) + 1} min`,
  }));

  return (
    <>
      <div className="bg-dark-500 py-4">
        <div className="flex text-light font-normal px-6 mb-2">
          <h2 className="text-[15px]/[18px] tracking-[0.15px] w-24 text-wrap">
            MY EXERCISE
          </h2>
          <span className="text-[22px]/[27px] tracking-[0.11px]">
            2021.05.21
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-2 px-6 mr-[26px] h-[192px] scrollbar-thin overflow-y-auto">
          {bodyRecords.map(record => (
            <div key={record.id} className="border-b border-gray-400">
              <div className="flex justify-between">
                <div className="flex space-x-3">
                  <div className="text-[5px] text-light mt-2">●</div>
                  <div className="flex flex-col space-y-0">
                    <p className="text-light text-[15px]/[22px]">
                      {record.label}
                    </p>
                    <span className="text-primary-300 text-[15px]/[18px] relative -top-[1px]">
                      {record.calories}kcal
                    </span>
                  </div>
                </div>
                <span className="text-primary-300 text-[18px]/[22px] pr-[13px]">
                  {record.duration}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyExercise;

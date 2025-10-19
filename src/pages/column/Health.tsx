import Button from "@/components/ui/Button/Button";
import BlogCard from "@/components/ui/BlogCard/BlogCard";
import Col1 from "@/assets/images/column-1.jpg";
import Col2 from "@/assets/images/column-2.jpg";
import Col3 from "@/assets/images/column-3.jpg";
import Col4 from "@/assets/images/column-4.jpg";
import Col5 from "@/assets/images/column-5.jpg";
import Col6 from "@/assets/images/column-6.jpg";
import Col7 from "@/assets/images/column-7.jpg";
import Col8 from "@/assets/images/column-8.jpg";

const Health = () => {
  const blogPosts = Array.from({ length: 8 }, (_, i) => ({
    title: `魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリット ${
      i + 1
    }`,
    date: "2024-01-05",
    time: "23:25",
    imgUrl: [Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8][i % 8],
    tags: [
      { label: "魚料理", linkTo: "魚料理" },
      { label: "和食", linkTo: "和食" },
      { label: "DHA", linkTo: "DHA" },
    ],
  }));

  return (
    <>
      <div className="mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-3 lg:gap-x-2 gap-y-[18px] mb-6">
          {blogPosts.map(post => (
            <BlogCard
              key={post.title}
              title={post.title}
              date={post.date}
              time={post.time}
              imgUrl={post.imgUrl}
              tags={post.tags}
            />
          ))}
        </div>
        <div className="text-center">
          <Button>コラムをもっと見る</Button>
        </div>
      </div>
    </>
  );
};

export default Health;

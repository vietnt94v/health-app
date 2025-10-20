import { useEffect, useState } from "react";
import { API } from "@/constants/api";
import api from "@/services/api";
import Button from "@/components/ui/Button/Button";
import BlogCard from "@/components/ui/BlogCard/BlogCard";

interface BlogHealthItem {
  title: string;
  date: string;
  time: string;
  imgUrl: string;
  tags: string[];
}

const Health = () => {
  const [blogHealth, setBlogHealth] = useState<BlogHealthItem[]>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetBlogHealth = async () => {
    try {
      setIsLoading(true);
      const response = await api.get(`${API.HEALTH}?_page=${page}&_limit=8`);
      setBlogHealth(response.data);
    } catch (error: unknown) {
      throw new Error("Failed to fetch data", { cause: error });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetBlogHealth();
  }, [page]);

  return (
    <>
      <div className="mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-x-3 lg:gap-x-2 gap-y-[18px] mb-6">
          {isLoading && <p>Loading...</p>}
          {blogHealth.map(post => (
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
          <Button onClick={() => setPage(prev => prev + 1)}>
            コラムをもっと見る
          </Button>
        </div>
      </div>
    </>
  );
};

export default Health;

import React, { useState, useEffect } from "react";
import { Card, CardBody, Skeleton, Image, Spacer } from "@nextui-org/react";
import axios from "axios";

interface MediumBlogCardProps {
  url: string;
  limit: number;
}

const MediumBlogCard = ({ url, limit }: MediumBlogCardProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState<
    {
      title: string;
      date: string;
      image: string;
      link: string;
      summary: string;
    }[]
  >([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(
          `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`
        );
        const posts = res.data.items.slice(0, limit).map((post: any) => ({
          title: post.title,
          date: new Date(post.pubDate).toLocaleDateString(),
          image: post.description
            ? (post.description as any)
                .toString()
                .match(/<img[^>]+src="([^">]+)"/)[1]
            : "",
          link: post.link,
          summary: post.description.replace(/<[^>]+>/g, "").slice(0, 200)
        }));
        setBlogs(posts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, [url, limit]);

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {isLoading
        ? Array.from({ length: limit }).map((_, index) => (
            <Card
              key={index}
              isHoverable
              isPressable
              style={{ width: "400px", cursor: "pointer" }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardBody
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Skeleton
                  style={{
                    borderRadius: "8px",
                    height: "200px",
                    width: "100%"
                  }}
                />
                <Skeleton
                  style={{
                    borderRadius: "8px",
                    height: "20px",
                    width: "80%"
                  }}
                />
              </CardBody>
            </Card>
          ))
        : blogs.map((blog, index) => (
            <Card
              key={index}
              isHoverable
              isPressable
              style={{ width: "400px", cursor: "pointer", height: "400px" }}
              onPress={() => window.open(blog.link, "_blank")}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardBody>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width="100%"
                  height="180px"
                  style={{ borderRadius: "8px", objectFit: "cover" }}
                />
                <Spacer y={4} />
                <p className="text-lg">{blog.title}</p>
                <Spacer y={4} />
                <p className="line-clamp-3">{blog.summary}</p>
                <Spacer y={1} />
                <p style={{ color: "gray" }}>{blog.date}</p>
              </CardBody>
            </Card>
          ))}
    </div>
  );
};

export default MediumBlogCard;

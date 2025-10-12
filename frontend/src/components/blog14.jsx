import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { Cta23 } from "./cta23";
import { client } from "../sanity/client";
import { useEffect, useState } from "react";
import PostCover from "@/assets/PostCover.png";
import { Link } from "react-router";

const POSTS_QUERY = `*[_type == 'post'] | order(publishAt desc){
   _id,
  title,
  "slug": slug.current,
  description,
  category,
  publishedAt,
  readingTime,
  image{
    asset->{
      _id,
      url
    }
  }
}`;

const Blog14 = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch posts from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(POSTS_QUERY);
        setPosts(data);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading posts...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-destructive mb-4'>{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className='py-32'>
        <div className='container'>
          <div className='mb-16 text-center'>
            <h1 className='text-5xl font-medium md:text-6xl'>
              Literary Collection
            </h1>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              A curated selection of poems, essays, articles, and short stories
              exploring exploring the intersection of art, literature and human
              experience.
            </p>
          </div>
          <div className='mx-auto max-w-7xl'>
            {posts.length > 0 && (
              <div className='my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16'>
                <img
                  src={posts[0]?.image?.asset?.url || PostCover}
                  alt={posts[0]?.title || "cover"}
                  className='aspect-video rounded-lg object-cover'
                />
                <div className='flex flex-col items-start gap-4'>
                  <Badge variant='secondary' className='shrink'>
                    {posts[0]?.category}
                  </Badge>
                  <h2 className='text-2xl font-semibold text-balance md:max-w-lg lg:text-3xl'>
                    {posts[0]?.title}
                  </h2>
                  <div className='w-full flex items-center justify-between gap-4 mb-3 text-sm text-muted-foreground'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='size-4' />
                      {new Date(posts[0]?.publishedAt).toLocaleDateString(
                        "en-US",
                        {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-4' />
                      {posts[0]?.readingTime} min read
                    </span>
                  </div>
                  <p className='text-muted-foreground md:max-w-lg'>
                    {posts[0]?.description}
                  </p>
                  <Link to={`/writings/${posts[0]?.slug}`}>
                    <Button className='mt-auto' size='lg'>
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            )}

            {/* Popular Posts */}
            <p className='text-2xl font-medium md:text-3xl'>Popular Writings</p>
            <div className='mt-8 grid grid-cols-1 gap-10 mb-32 md:grid-cols-3 md:gap-6'>
              {posts.slice(1, 4).map((post) => (
                <div
                  key={post._id}
                  className='flex flex-col items-start gap-4 h-full'
                >
                  <img
                    src={post.image?.asset?.url || PostCover}
                    alt={post.title}
                    className='aspect-video rounded-lg object-cover'
                  />
                  <div className='flex flex-row gap-2'>
                    <Badge variant='secondary' className='shrink'>
                      {post.category}
                    </Badge>
                    <Badge variant='primary' className='shrink'>
                      Popular
                    </Badge>
                  </div>
                  <h3 className='text-xl font-semibold text-balance md:max-w-md'>
                    {post.title}
                  </h3>
                  <div className='w-full flex items-center justify-between gap-4 mb-3 text-sm text-muted-foreground'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='size-4' />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-4' />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <p className='text-muted-foreground md:max-w-md flex-grow'>
                    {post.description}
                  </p>
                  <a
                    href={`/writings/${post.slug}`}
                    // target='_blank'
                    className='inline-flex items-center text-primary hover:underline'
                  >
                    Read more
                    <ArrowRight className='ml-2 size-4' />
                  </a>
                </div>
              ))}
            </div>

            {/* All posts */}
            <p className='text-2xl font-medium md:text-3xl'>All Writings</p>
            <div className='mt-8 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6'>
              {posts.map((post) => (
                <div
                  key={post._id}
                  className='flex flex-col items-start gap-4 h-full'
                >
                  <img
                    src={post.image?.asset?.url || PostCover}
                    alt={post.title}
                    className='aspect-video rounded-lg object-cover'
                  />
                  <Badge variant='secondary' className='shrink'>
                    {post.category}
                  </Badge>
                  <h3 className='text-xl font-semibold text-balance md:max-w-md'>
                    {post.title}
                  </h3>
                  <div className='w-full flex items-center justify-between gap-4 mb-3 text-sm text-muted-foreground'>
                    <span className='flex items-center gap-1'>
                      <Calendar className='size-4' />
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-4' />
                      {post.readingTime} min read
                    </span>
                  </div>
                  <p className='text-muted-foreground md:max-w-md flex-grow'>
                    {post.description}
                  </p>
                  <a
                    href={`/writings/${post.slug}`}
                    // target='_blank'
                    className='inline-flex items-center text-primary hover:underline'
                  >
                    Read more
                    <ArrowRight className='ml-2 size-4' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta23 />
    </>
  );
};

export { Blog14 };

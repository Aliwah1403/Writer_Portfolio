import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Cta23 } from "./cta23";

const posts = [
  {
    title: "Exploring the Future of AI in Modern Technology Trends",
    category: "Technology",
    description:
      "Discover how AI is transforming industries and learn about the latest advancements in artificial intelligence. Discover how AI is transforming industries and learn about the latest advancements in artificial intelligence.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img2.jpeg",
  },
  {
    title: "Strategies for Effective Business Growth in 2025",
    category: "Business",
    description:
      "Learn proven strategies to grow your business and stay competitive in the ever-evolving market landscape.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img11.jpeg",
  },
  {
    title: "Top Wellness Trends to Improve Your Health in 2025",
    category: "Health & Wellness",
    description:
      "Explore the top wellness trends that can help you achieve a healthier and more balanced lifestyle.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img6.jpeg",
  },
  {
    title: "Boosting Productivity with Smart Tools and Techniques",
    category: "Productivity",
    description:
      "Find out how to enhance your productivity using the latest tools and techniques for better time management.",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
  },
];

const Blog14 = () => {
  return (
    <>
      <section className='py-32'>
        <div className='container'>
          <div className='mb-16 text-center'>
            <h1 className='text-5xl font-medium md:text-6xl'>
              Explore My Writings
            </h1>
            <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
              Essays, articles, poems and other creative works exploring the
              intersection of art, literature and human experience
            </p>
          </div>
          <div className='mx-auto max-w-7xl'>
            <div className='my-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-16'>
              <img
                src={posts[0].image}
                alt='placeholder'
                className='aspect-video rounded-lg object-cover'
              />
              <div className='flex flex-col items-start gap-4'>
                <Badge variant='secondary' className='shrink'>
                  {posts[0].category}
                </Badge>
                <h2 className='text-2xl font-semibold text-balance md:max-w-lg lg:text-3xl'>
                  {posts[0].title}
                </h2>
                <div className='w-full flex items-center justify-between gap-4 mb-3 text-sm text-muted-foreground'>
                  <span className='flex items-center gap-1'>
                    <Calendar className='size-4' />
                    28th September, 2025
                  </span>
                  <span className='flex items-center gap-1'>
                    <Clock className='size-4' />8 min read
                  </span>
                </div>
                <p className='text-muted-foreground md:max-w-lg'>
                  {posts[0].description}
                </p>
                <Button className='mt-auto' size='lg'>
                  Read More
                </Button>
              </div>
            </div>

            {/* Popular Posts */}
            <p className='text-2xl font-medium md:text-3xl'>Popular Writings</p>
            <div className='mt-8 grid grid-cols-1 gap-10 mb-32 md:grid-cols-3 md:gap-6'>
              {posts.slice(1).map((post) => (
                <div
                  key={post.title}
                  className='flex flex-col items-start gap-4 h-full'
                >
                  <img
                    src={post.image}
                    alt='placeholder'
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
                      28th September, 2025
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-4' />8 min read
                    </span>
                  </div>
                  <p className='text-muted-foreground md:max-w-md flex-grow'>
                    {post.description}
                  </p>
                  <a
                    // href={post.url}
                    href='#'
                    target='_blank'
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
              {posts.slice(1).map((post) => (
                <div
                  key={post.title}
                  className='flex flex-col items-start gap-4 h-full'
                >
                  <img
                    src={post.image}
                    alt='placeholder'
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
                      28th September, 2025
                    </span>
                    <span className='flex items-center gap-1'>
                      <Clock className='size-4' />8 min read
                    </span>
                  </div>
                  <p className='text-muted-foreground md:max-w-md flex-grow'>
                    {post.description}
                  </p>
                  <a
                    // href={post.url}
                    href='#'
                    target='_blank'
                    className='inline-flex items-center text-primary hover:underline'
                  >
                    Read more
                    <ArrowRight className='ml-2 size-4' />
                  </a>
                  {/* <Button className='mt-auto' variant="ghost">Read More</Button> */}
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

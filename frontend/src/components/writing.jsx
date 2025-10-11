"use client";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  Loader2,
  Share,
} from "lucide-react";
import { Fragment, useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { cn } from "../lib/utils";
import { Separator } from "./ui/separator";
import { client } from "../sanity/client";
import { useParams } from "react-router";
import { getCategoryDisplayName } from "../lib/post_utils";

const SINGLE_POST_QUERY = `*[_type == 'post' && slug.current == $slug][0] {
   _id,
  title,
  "slug": slug.current,
  description,
  category,
  publishedAt,
  readingTime,
  body
}`;

const AUTHOR = {
  image:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  name: "Jane Doe",
  job: "CEO & Cofounder",
  description:
    "An avid storyteller with a passion for crafting compelling narratives, love to explore the human experience through vivid characters and thought-provoking themes. ",
  socials: [
    {
      icon: Twitter,
      url: "#",
    },
    {
      icon: Linkedin,
      url: "#",
    },
  ],
};

const SHARE_LINKS = [
  {
    icon: Share,
    url: "#",
  },
  {
    icon: Twitter,
    url: "#",
  },
  {
    icon: Linkedin,
    url: "#",
  },
];

const ARTICLE_DATE = "May 18, 2025";
const ARTICLE_DURATION = "10 min read";

const Writing = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState(null);

  // Fetch single post
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await client.fetch(SINGLE_POST_QUERY, { slug });
        setPost(data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Failed to load post. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  // Intersection observer for table of contents
  useEffect(() => {
    if (!post?.body) return;

    const headingElements = document.querySelectorAll("h2[id]");
    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [post?.body]);

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading post...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-destructive mb-4'>
                {error || "Post not found"}
              </p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const BREADCRUMB = [
    {
      label: "Writings",
      link: "/writings",
    },
    {
      label: getCategoryDisplayName(post.title),
      link: "#",
    },
  ];

  return (
    <section className='pb-32'>
      <div className="bg-muted bg-[url('https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/dot-pattern-2.svg')] bg-[length:3.125rem_3.125rem] bg-repeat py-20">
        <div className='container flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between'>
          <div className='flex w-full flex-col items-center justify-center gap-12'>
            <div className='flex w-full max-w-[36rem] flex-col items-center justify-center gap-8'>
              <BreadcrumbBlog breadcrumb={BREADCRUMB} />
              <div className='flex w-full flex-col gap-5'>
                <div className='text-muted-2-foreground flex items-center justify-center gap-2.5 text-sm font-medium'>
                  <div>{post.readingTime} min read</div>
                  <div>|</div>
                  <div>
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <h1 className='text-center text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl'>
                  {post.title}
                </h1>
                <p className='text-foreground text-center text-xl font-semibold leading-[1.4]'>
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-20'>
        <div className='relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex'>
          {/* Table of Contents */}

          <div className='bg-background top-20 flex-1 pb-10 lg:sticky lg:pb-0'>
            <span className='text-lg font-medium'>On this page</span>
            <nav className='mt-4 text-sm'>
              <ul className='space-y-1'>
                {/* Generate TOC from post body headings */}
                {post.body
                  ?.filter(
                    (block) => block._type === "block" && block.style === "h2"
                  )
                  .map((heading, index) => (
                    <li key={index}>
                      <a
                        href={`#heading-${index + 1}`}
                        className={cn(
                          "block py-1 transition-colors duration-200",
                          activeId === `heading-${index + 1}`
                            ? "text-primary"
                            : "text-muted-foreground hover:text-primary"
                        )}
                      >
                        {heading.children?.[0]?.text || `Section ${index + 1}`}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
            <Separator className='my-6' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-medium'>Share this article</p>
              <ul className='flex gap-2'>
                {SHARE_LINKS.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className='hover:bg-muted inline-flex rounded-full border p-2 transition-colors'
                    >
                      <link.icon className='h-4 w-4' />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-6'>
              <Button
                variant='outline'
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <ArrowUp className='h-4 w-4' />
                Back to top
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className='flex w-full max-w-[40rem] flex-col gap-10'>
            <Author author={AUTHOR} />
            <div className='prose dark:prose-invert max-w-none'>
              {post.body?.map((block, index) => {
                if (block._type === "block") {
                  const style = block.style || "normal";
                  const text = block.children?.[0]?.text || "";

                  if (style.startsWith("h")) {
                    const level = parseInt(style.replace("h", ""));
                    const id = `heading-${index + 1}`;
                    const HeadingTag = `h${level}`;
                    return (
                      <HeadingTag key={index} id={id} className='scroll-mt-24'>
                        {text}
                      </HeadingTag>
                    );
                  }

                  return <p key={index}>{text}</p>;
                }
                return null;
              })}
            </div>

            {/* Conclusion */}
            {/* <div className='prose dark:prose-invert bg-muted rounded-lg p-5 [&>h2]:mt-0'>
              <h2>Conclusion</h2>
              <p>
                UI components are more than just visual elements—they are
                strategic assets in a modern developer's toolkit. When designed
                thoughtfully and used effectively, they empower teams to deliver
                high-quality interfaces with speed, consistency, and confidence.
                As frontend development continues to evolve, investing in
                reusable, accessible, and well-documented UI components will
                remain essential for building user-centric, maintainable digital
                products.
              </p>
            </div> */}

            {/* Author
            <div className='bg-muted flex flex-col gap-4 rounded-lg p-5'>
              <Author author={AUTHOR} />
              <p>{AUTHOR.description}</p>
              <div className='flex items-center gap-2.5'>
                {AUTHOR.socials.map((link, index) => (
                  <Button asChild key={`author-socials-${index}`} size='icon'>
                    <a href={link.url}>
                      <link.icon />
                    </a>
                  </Button>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

const Author = ({ author }) => {
  return (
    <div className='flex items-center gap-2.5'>
      <Avatar className='size-12 border'>
        <AvatarImage src={author.image} alt={author.name} />
        <AvatarFallback>{author.name}</AvatarFallback>
      </Avatar>
      <div>
        <div className='text-sm font-normal leading-normal'>{author.name}</div>
        <div className='text-muted-foreground text-sm font-normal leading-normal'>
          {author.job}
        </div>
      </div>
    </div>
  );
};

const BreadcrumbBlog = ({ breadcrumb }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumb.map((item, i) => {
          return (
            <Fragment key={`${item.label}`}>
              <BreadcrumbItem>
                <BreadcrumbLink href={item.link}>{item.label}</BreadcrumbLink>
              </BreadcrumbItem>
              {i < breadcrumb.length - 1 ? (
                <BreadcrumbSeparator>/</BreadcrumbSeparator>
              ) : null}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Writing;

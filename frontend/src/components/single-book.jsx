import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  BookOpen,
  Loader2,
  Share,
} from "lucide-react";
import { Fragment, useEffect, useRef, useState } from "react";
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
import { Badge } from "./ui/badge";
import { client } from "../sanity/client";
import { useParams } from "react-router";

const SINGLE_BOOK_WITH_CHAPTERS_QUERY = `*[_type == "books" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  description,
  publicationYear,
  genre,
  status,
  "chapters": *[_type == "chapter" && references(^._id)] | order(chapterNumber asc) {
    _id,
    title,
    chapterNumber,
    content
  }
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

const BREADCRUMB = [
  {
    label: "Books",
    link: "#",
  },
  {
    label: "Tales from the Heart",
    link: "#",
  },
];

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

const SingleBook = () => {
  const { slug } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const contentTopRef = useRef(null);

  // Fetch book with chapters
  useEffect(() => {
    const fetchBook = async () => {
      if (!slug) return;

      try {
        setLoading(true);
        const data = await client.fetch(SINGLE_BOOK_WITH_CHAPTERS_QUERY, {
          slug,
        });
        setBook(data);
      } catch (error) {
        console.error("Error fetching book: ", error);
        setError("Failed to load book. Please try again later");
      } finally {
        setLoading(false);
      }
    };
    fetchBook();
  }, [slug]);

  // Intersection observer for chapter navigation
  useEffect(() => {
    if (!book?.chapters?.length) return;

    const chapterIds = book.chapters.map((_, index) => `heading-${index + 1}`);
    const headingElements = chapterIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

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
  }, [book?.chapters]);

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading book content...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error || !book) {
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

  const renderChapterContent = (content) => {
    if (!content || !Array.isArray(content)) return null;

    return content.map((block, index) => {
      if (block._type === "block") {
        const style = block.style || "normal";
        const text = block.children?.map((child) => child.text).join("") || "";

        if (style.startsWith("h")) {
          const level = parseInt(style.replace("h", ""));
          const HeadingTag = `h${level}`;
          const id = `heading-${currentChapter + 1}`;
          return (
            <HeadingTag key={index} id={id} className='scroll-mt-24'>
              {text}
            </HeadingTag>
          );
        }

        return <p key={index}>{text}</p>;
      }
      return null;
    });
  };

  const BREADCRUMB = [
    { label: "Books", link: "/books" },
    { label: book.title, link: "#" },
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
                  <div>{book.publicationYear}</div>
                  <div>|</div>
                  <div className='flex flex-row items-center justify-center gap-1'>
                    <BookOpen className='size-4' />
                    {book.chapters.length} Chapters
                  </div>
                </div>
                <h1 className='text-center text-[2.5rem] font-semibold leading-[1.2] md:text-5xl lg:text-6xl'>
                  {book.title}
                </h1>
                <p className='text-foreground text-center text-xl font-semibold leading-[1.4]'>
                  {book.description}
                </p>
                <div className='flex items-center justify-center gap-2.5'>
                  <Badge>{book.genre}</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container pt-20'>
        <div className='relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex'>
          {/* Chapters */}

          <div className='bg-background top-20 flex-1 pb-10 lg:sticky lg:pb-0'>
            <span className='text-lg font-medium'>Chapters</span>
            <nav className='mt-4 text-sm'>
              <ul className='space-y-1'>
                {book.chapters?.map((chapter, index) => (
                  <li key={chapter._id}>
                    <a
                      href='#'
                      onClick={(e) => {
                        e.preventDefault();
                        setCurrentChapter(index);
                        requestAnimationFrame(() => {
                          contentTopRef.current?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        });
                      }}
                      className={cn(
                        "block py-1 transition-colors duration-200",
                        currentChapter === index
                          ? "text-primary"
                          : "text-muted-foreground hover:text-primary"
                      )}
                      aria-current={
                        currentChapter === index ? "page" : undefined
                      }
                    >
                      {`Chapter ${index + 1}: ${chapter.title}`}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <Separator className='my-6' />
            <div className='flex items-center justify-between'>
              <p className='text-sm font-medium'>Share this post</p>
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

          {/* Book Content */}
          <div
            className='flex w-full max-w-[40rem] flex-col gap-10'
            ref={contentTopRef}
          >
            <article className='mb-12'>
              <div
                className='prose prose-base max-w-none dark:prose-invert'
                style={{ fontSize: "16px", lineHeight: 1.7 }}
              >
                {book.chapters?.[currentChapter] && (
                  <div>
                    <h1 className='text-2xl font-bold mb-4'>
                      Chapter {book.chapters[currentChapter].chapterNumber}:{" "}
                      {book.chapters[currentChapter].title}
                    </h1>
                    {renderChapterContent(
                      book.chapters[currentChapter].content
                    )}
                  </div>
                )}
              </div>
            </article>
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

export default SingleBook;

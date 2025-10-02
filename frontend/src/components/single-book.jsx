import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  ArrowUp,
  BookOpen,
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
    icon: Twitter,
    url: "#",
  },
  {
    icon: Linkedin,
    url: "#",
  },
];

const book = {
  title: "Tales from the Heart",
  description:
    "An upcoming collection of short stories that delve into the complexities of human relationships, featuring characters navigating love, loss, hope, and transformation in contemporary settings.",
  coverImage:
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
  publicationYear: 2024,
  genre: "Short Stories",
  chapters: [
    {
      id: 1,
      title: "The First Note",
      content: `# Chapter 1: The First Note\n\nThe piano sat in the corner of the room like a sleeping giant, its ebony surface reflecting the afternoon light that filtered through the dusty windows. Maya had walked past it every day for three months, but today something was different. Today, the silence felt heavier, more expectant.\n\nShe approached slowly, her fingers trembling as they hovered over the keys. The apartment was small, cramped with the detritus of a life in transition—boxes still unpacked, furniture arranged with the temporary precision of someone who hadn't yet decided to stay. But the piano, her grandmother's piano, commanded the space with an authority that spoke of permanence, of roots that ran deeper than circumstance.\n\nThe first note rang out clear and true, a middle C that seemed to unlock something in the air around her. It was followed by another, then another, until her fingers found the melody that had been haunting her dreams for weeks. The music flowed from her hands as if it had been waiting there all along, patient and persistent as water finding its way through stone.\n\nOutside, the city hummed its endless song—traffic and voices, construction and commerce, the great symphony of urban life that never quite resolved into harmony. But here, in this small room with its sleeping giant now awakened, Maya found something she hadn't realized she'd been searching for: her own voice, clear and strong and utterly, unmistakably hers.\n\nThe melody grew more complex, weaving through major and minor keys like a conversation between her past and future selves. Each note was a choice, each chord a commitment to the person she was becoming. The music told the story of her journey—from the small town where everyone knew her name to this anonymous city where she could be anyone, or no one at all.\n\nAs the last note faded into silence, Maya realized she was crying. Not from sadness, but from the overwhelming relief of finally, finally coming home to herself. The piano seemed to sigh beneath her hands, satisfied with this first offering, this tentative step toward the music that would define the rest of her life.\n\nShe looked around the apartment with new eyes. The boxes could wait. The furniture could stay where it was. This was home now, not because of the address or the lease agreement, but because this was where her music lived. This was where she would learn to sing her own song, in a world that desperately needed new voices, new harmonies, new ways of making sense of the beautiful chaos of being human.\n\nThe afternoon light shifted, casting long shadows across the floor, and Maya began to play again.`,
    },
    {
      id: 2,
      title: "Harmonies and Dissonance",
      content: `# Chapter 2: Harmonies and Dissonance\n\nThe coffee shop on Fifth Street had become Maya's second home, a place where she could observe the city's rhythm while nursing a single cup of coffee for hours. The owner, Mrs. Chen, had stopped asking if she wanted a refill after the third week, instead simply sliding a fresh cup across the scarred wooden table whenever Maya's fingers began to tap out melodies on its surface.\n\n"You're a musician," Mrs. Chen had said one rainy Thursday, not a question but a statement of fact. Maya had nodded, surprised by how good it felt to claim that identity out loud.\n\nNow, two months later, Maya sat in her usual corner booth, a notebook filled with musical notations spread before her. The morning rush had given way to the quieter rhythm of mid-afternoon, when the coffee shop filled with freelancers and students, each absorbed in their own creative pursuits. It was here that she first heard him play.\n\nThe guitar case appeared first, battered leather with stickers from cities she'd never visited. Then came the man himself—tall and lean, with calloused fingers that spoke of years spent coaxing music from strings. He set up in the opposite corner without fanfare, tuning his instrument with the practiced efficiency of someone who had done this a thousand times before.\n\nWhen he began to play, the entire coffee shop seemed to exhale. His music was different from hers—where she sought precision and structure, he embraced the spaces between notes, the silences that gave meaning to sound. His melodies wandered like conversations, starting in one place and ending somewhere entirely unexpected.\n\nMaya found herself leaning forward, her own notebook forgotten as she tried to follow the logic of his improvisation. There was something familiar in his approach, a willingness to let the music lead rather than forcing it into predetermined shapes. It reminded her of her grandmother's playing, the way she would sit at the piano and let her fingers find their own way home.\n\nWhen he finished the first song, their eyes met across the room. He smiled—a quick, shy expression that transformed his angular features—and launched into another piece. This one was more complex, layering rhythms and harmonies in ways that shouldn't have worked but somehow did. Maya realized she was holding her breath.\n\nDuring his break, he approached her table with the easy confidence of someone accustomed to talking to strangers.\n\n"You're a musician too," he said, gesturing to her notebook. "I can tell by the way you listen."\n\nHis name was David, and he'd been playing coffee shops and street corners for five years, ever since dropping out of music school to pursue what he called "real music"—the kind that happened in the spaces between formal training and pure instinct.\n\n"Want to try something together?" he asked, nodding toward the piano that sat unused in the corner of the shop.\n\nMaya's first instinct was to decline. She wasn't ready, hadn't practiced enough, didn't know his style. But something in his expression—patient, encouraging, free of judgment—made her nod instead.\n\nThe piano bench was narrow, forcing them to sit closer than strangers usually did. David started with a simple chord progression, something in G major that felt like sunlight on water. Maya listened for a moment, finding the spaces where her melody could weave through his harmony.\n\nWhat happened next felt like magic. Their music found each other with the inevitability of rivers flowing toward the sea. Where his guitar provided the foundation, her piano added color and texture. Where her melodies soared, his rhythms kept them grounded. They played for twenty minutes without speaking, communicating in the universal language of music.\n\nWhen they finally stopped, the coffee shop erupted in applause. Maya looked around, startled to realize they had drawn an audience. Mrs. Chen was beaming from behind the counter, and even the most absorbed laptop users had looked up from their screens.\n\n"Same time tomorrow?" David asked, already packing up his guitar.\n\nMaya nodded, her heart still racing from the unexpected joy of musical collaboration. As she walked home that evening, she found herself humming their improvised melody, already imagining how it might evolve, how their two voices might continue to find harmony in the beautiful dissonance of the city around them.`,
    },
  ],
  nextContent: {
    type: "book",
    slug: "whispers-in-the-gallery",
    title: "Whispers in the Gallery",
  },
  prevContent: null,
};

const ARTICLE_DATE = "May 18, 2025";
const ARTICLE_DURATION = "10 min read";

const SingleBook = () => {
  const [activeId, setActiveId] = useState(null);
  const [currentChapter, setCurrentChapter] = useState(0);
  const contentTopRef = useRef(null);

  const content = book;

  useEffect(() => {
    // Query all h2 elements with IDs that match the chapter anchors
    const chapterIds = ["heading-1", "heading-2", "heading-3"];
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
  }, []);

  if (!content) {
    return (
      <div className='min-h-screen bg-background flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-muted-foreground mb-4'>
            Content Not Found
          </h1>
          <p className='text-muted-foreground mb-6'>
            The content you are looking for does not exist
          </p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if ("chapters" in book) {
      return (
        <div
          className='prose prose-base max-w-none dark:prose-invert'
          style={{ fontSize: "7px", lineHeight: 1.7 }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: book.chapters[currentChapter].content
                .replace(/\n/g, "<br />")
                .replace(/# /g, "<h1>")
                .replace(/<br \/><br \/>/g, "</p><p>")
                .replace(/^/, "<p>")
                .replace(/$/, "</p>"),
            }}
          />
        </div>
      );
    }

    // return (
    //   <div
    //     className='prose prose-lg max-w-none dark:prose-invert'
    //     style={{ lineHeight: 1.7 }}
    //   >
    //     <div
    //       dangerouslySetInnerHTML={{
    //         __html: content.content
    //           .replace(/\n/g, "<br />")
    //           .replace(/# /g, "<h1>")
    //           .replace(/## /g, "<h2>")
    //           .replace(/### /g, "<h3>")
    //           .replace(/<br \/><br \/>/g, "</p><p>")
    //           .replace(/^\*([^*]+)\*$/gm, "<em>$1</em>")
    //           .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"),
    //       }}
    //     />
    //   </div>
    // );
  };

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
                {book.chapters.map((chapter, index) => (
                  <li key={chapter.id ?? index}>
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
              <p className='text-sm font-medium'>Share this article</p>
              <ul className='flex gap-2'>
                <li>
                  <a
                    href='#'
                    className='hover:bg-muted inline-flex rounded-full border p-2 transition-colors'
                  >
                    <Facebook className='h-4 w-4' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:bg-muted inline-flex rounded-full border p-2 transition-colors'
                  >
                    <Twitter className='h-4 w-4' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:bg-muted inline-flex rounded-full border p-2 transition-colors'
                  >
                    <Linkedin className='h-4 w-4' />
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:bg-muted inline-flex rounded-full border p-2 transition-colors'
                  >
                    <Instagram className='h-4 w-4' />
                  </a>
                </li>
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
            {/* <Author author={AUTHOR} /> */}
            <article className='mb-12'>{renderContent()}</article>
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

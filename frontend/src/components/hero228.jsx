"use client";

import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import React, { useMemo } from "react";
import { useCallback } from "react";

import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero228 = () => {
  const [api, setApi] = React.useState();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const isMobile = useIsMobile();

  const testimonials = [
    {
      id: 1,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person1.jpeg",
      name: "Writer",
    },
    {
      id: 2,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person2.jpeg",
      name: "Creator",
    },
    {
      id: 3,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person3.jpeg",
      name: "Dreamer",
    },
    {
      id: 4,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person4.jpeg",
      name: "Story Teller",
    },
    {
      id: 5,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/person5.jpeg",
      name: "Artist",
    },
    {
      id: 6,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      name: "Bard",
    },
    {
      id: 7,
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
      name: "Composer",
    },
  ];

  const getRotation = useCallback(
    (index) => {
      if (index === current)
        return "md:-rotate-45 md:translate-x-40 md:scale-75 md:relative";
      if (index === current + 1) return "md:rotate-0 md:z-10 md:relative";
      if (index === current + 2)
        return "md:rotate-45 md:-translate-x-40 md:scale-75 md:relative";
    },
    [current]
  );

  const scrollbarBars = useMemo(
    () =>
      [...Array(40)].map((_, item) => (
        <motion.div
          key={item}
          initial={{
            opacity: item % 5 === 0 ? 0.2 : 0.2,
            filter: "blur(1px)",
          }}
          animate={{
            opacity: item % 5 === 0 ? 1 : 0.2,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.2,
            delay: item % 5 === 0 ? (item / 5) * 0.05 : 0,
            ease: "easeOut",
          }}
          className={cn(
            "w-[1px] bg-black",
            item % 5 === 0 ? "h-[15px]" : "h-[10px]"
          )}
        />
      )),
    []
  );

  return (
    <section className='bg-background py-32'>
      <div className='container flex flex-col items-center justify-center gap-4 text-center'>
        <h1 className='max-w-3xl text-5xl font-medium tracking-tighter text-foreground md:px-9 md:text-6xl'>
          Weaving Worlds through
          <span className='font-playfair italic'> Words</span> and{" "}
          <span className='font-playfair italic'>Art</span>
        </h1>
        <p className='mt-5 max-w-xl text-muted-foreground/80'>
          A creative journey exploring the depths of human emotion through
          storytelling and visual expression. Each piece is a window into
          unexplored landscapes of imagination and feeling.
        </p>

        <Carousel
          className='max-w-5xl'
          plugins={[
            Autoplay({
              delay: 1000,
              stopOnInteraction: true,
            }),
          ]}
          setApi={setApi}
        >
          <CarouselContent>
            {Array.from({
              length: isMobile ? testimonials.length : testimonials.length + 2,
            }).map((_, index) => (
              <CarouselItem key={index} className='my-10 md:basis-1/3'>
                <div
                  className={`h-105 w-full transition-transform duration-500 ease-in-out ${getRotation(
                    index
                  )}`}
                >
                  <img
                    src={
                      index == testimonials.length
                        ? testimonials[0].image
                        : index == testimonials.length + 1
                        ? testimonials[1].image
                        : index == testimonials.length + 2
                        ? testimonials[2].image
                        : testimonials[index].image
                    }
                    className='h-full w-full object-cover'
                    alt=''
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='absolute right-0 bottom-0 flex w-full translate-y-full flex-col items-center justify-center gap-2'>
            <div className='flex gap-2'>{scrollbarBars}</div>
            <AnimatePresence mode='popLayout' initial={false}>
              <motion.p
                key={current}
                className='w-full text-lg font-medium'
                initial={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, scale: 0.9, filter: "blur(5px)" }}
                transition={{ duration: 0.5 }}
              >
                {testimonials[current]?.name}
              </motion.p>
            </AnimatePresence>
            <div className='flex gap-2'>{scrollbarBars}</div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export { Hero228 };

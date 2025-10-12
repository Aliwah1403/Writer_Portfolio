import { TimelineContent } from "@/components/ui/timeline-animation";
import { Zap, Heart, MoveRight } from "lucide-react";
import { useRef } from "react";
import { buttonVariants } from "./ui/button";
import { cn } from "../lib/utils";
import { Link } from "react-router";

export default function AboutSection() {
  const heroRef = useRef(null);
  const revealVariants = {
    visible: (i) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 1.5,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      y: 40,
      opacity: 0,
    },
  };
  const textVariants = {
    visible: (i) => ({
      filter: "blur(0px)",
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.7,
      },
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
    },
  };
  return (
    <section className='py-32 px-4 bg-gray-50 min-h-screen'>
      <div className='max-w-6xl mx-auto' ref={heroRef}>
        <div className='flex flex-col lg:flex-row items-start gap-8'>
          {/* Right side - Content */}
          <div className='flex-1'>
            <TimelineContent
              as='h1'
              animationNum={0}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className='sm:text-4xl text-2xl md:text-5xl !leading-[110%] font-semibold text-gray-900 mb-8'
            >
              I am a{" "}
              <TimelineContent
                as='span'
                animationNum={1}
                timelineRef={heroRef}
                customVariants={textVariants}
                className='text-blue-600 border-2 border-blue-500 inline-block xl:h-16 border-dotted px-2 rounded-md'
              >
                storyteller
              </TimelineContent>{" "}
              who believes in the power of narrative to transform perspectives.
              Through prose, poetry, and visual art, I explore what it means to
              be{" "}
              <TimelineContent
                as='span'
                animationNum={2}
                timelineRef={heroRef}
                customVariants={textVariants}
                className='text-orange-600 border-2 border-orange-500 inline-block xl:h-16 border-dotted px-2 rounded-md'
              >
                human
              </TimelineContent>
              —the struggles, the beauty, the in-between moments that invite{" "}
              <TimelineContent
                as='span'
                animationNum={3}
                timelineRef={heroRef}
                customVariants={textVariants}
                className='text-green-600 border-2 border-green-500 inline-block xl:h-16 border-dotted px-2 rounded-md'
              >
                reflection
              </TimelineContent>{" "}
              and spark connection.
            </TimelineContent>

            <div className='mt-12 flex flex-col lg:flex-row items-center gap-2 justify-between'>
              <TimelineContent
                as='div'
                animationNum={4}
                timelineRef={heroRef}
                customVariants={textVariants}
                className='mb-4 sm:text-xl text-xs'
              >
                <div className='font-medium text-gray-900 mb-1 capitalize'>
                  I am Joehara Mastura and I Will
                </div>
                <div className='text-gray-600 font-semibold uppercase'>
                  INSPIRE YOUR IMAGINATION
                </div>
              </TimelineContent>

              <div className='flex flex-col lg:flex-row gap-3 items-center justify-center'>
                <Link to={"/about"}>
                  <TimelineContent
                    as='button'
                    animationNum={5}
                    timelineRef={heroRef}
                    customVariants={textVariants}
                    className='bg-primary gap-2 font-medium shadow-lg shadow-primary text-white h-12 px-4 rounded-lg text-sm inline-flex items-center cursor-pointer'
                  >
                    <Heart fill='white' size={16} />
                    Get To Know Me
                  </TimelineContent>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Facebook, Linkedin, Twitter } from "lucide-react";
import React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact10 = () => {
  return (
    <section className='relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-amber-50 via-background to-background py-32 lg:mx-4 dark:from-amber-950'>
      <div className='container max-w-2xl'>
        <h1 className='text-center text-4xl font-semibold tracking-tight lg:text-5xl'>
          Get in touch
        </h1>
        <p className='mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto'>
          I'd love to hear from you. Whether you're interested in my writing,
          artwork, or have a collaboration in mind, let's start a conversiation
        </p>

        <div className='mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12'>
          {/* <div>
            <h2 className='font-semibold'>Corporate office</h2>
            <p className='mt-3 text-muted-foreground'>
              1 Carlsberg Close
              <br />
              1260 Hillview, Australia
            </p>
          </div> */}

          <div>
            <h2 className='font-semibold'>Email me</h2>
            <div className='mt-3'>
              <div>
                {/* <p className='text-primary'>Careers</p> */}
                <a
                  href='mailto:masturajoeharah@gmail.com'
                  className='text-muted-foreground hover:text-foreground'
                >
                  masturajoeharah@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h2 className='font-semibold'>Follow me</h2>
            <div className='mt-3 flex gap-2 lg:gap-3'>
              <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <Facebook className='size-5' />
              </a>
              {/* <a
                href='#'
                className='text-muted-foreground hover:text-foreground'
              >
                <Twitter className='size-5' />
              </a> */}
              <a
                target='_blank'
                href='https://www.linkedin.com/in/joeharah-mastura-7a50b6225?/'
                className='text-muted-foreground hover:text-foreground'
              >
                <Linkedin className='size-5' />
              </a>
            </div>
          </div>
        </div>

        <DashedLine className='my-12' />

        {/* Inquiry Form */}
        <div className='mx-auto'>
          <h2 className='text-lg font-semibold'>Inquiries</h2>
          <form className='mt-8 space-y-5'>
            <div className='space-y-2'>
              <Label>Full name</Label>
              <Input placeholder='First and last name' />
            </div>
            <div className='space-y-2'>
              <Label>Email address</Label>
              <Input placeholder='me@company.com' type='email' />
            </div>
            {/* <div className='space-y-2'>
              <Label>
                Company name{" "}
                <span className='text-muted-foreground'>(optional)</span>
              </Label>
              <Input placeholder='Company name' />
            </div> */}
            {/* <div className='space-y-2'>
              <Label>
                Number of employees{" "}
                <span className='text-muted-foreground'>(optional)</span>
              </Label>
              <Input placeholder='e.g. 10-50' />
            </div> */}
            <div className='space-y-2'>
              <Label>Message</Label>
              <Textarea
                placeholder='Tell me about your project, idea or question.'
                className='min-h-[120px] resize-none'
              />
            </div>

            <div className='flex justify-end'>
              <Button size='lg' type='submit' className=''>
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

const DashedLine = ({ orientation = "horizontal", className } = {}) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "relative text-muted-foreground",
        isHorizontal ? "h-px w-full" : "h-full w-px",
        className
      )}
    >
      <div
        className={cn(
          isHorizontal
            ? [
                "h-px w-full",
                "bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)]",
                "[mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]",
              ]
            : [
                "h-full w-px",
                "bg-[repeating-linear-gradient(180deg,transparent,transparent_4px,currentColor_4px,currentColor_8px)]",
                "[mask-image:linear-gradient(180deg,transparent,black_25%,black_75%,transparent)]",
              ]
        )}
      />
    </div>
  );
};

export { Contact10 };

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const BookCard = ({
  title,
  description,
  coverImage,
  publicationYear,
  genre,
  status,
  purchaseLink,
}) => {
  return (
    <Card
      className='group hover-elevate transition-all duration-300 h-full flex flex-col'
      data-testid={`card-book-${title.toLowerCase().replace(/\s+/g, "_")}`}
    >
      <CardHeader className='p-0'>
        <div className='aspect-[3/4] overflow-hidden rounded-t-lg'>
          <img
            src={coverImage}
            alt={`${title} book cover`}
            className='size-full object-cover group-hover:scale-105 transition-transform duration-300'
            data-testid='img-book-cover'
          />
        </div>
      </CardHeader>

      <CardContent className='p-6 flex-grow'>
        <div className='flex items-start justify-between mb-3'>
          <div className='flex gap-2'>
            <Badge
              variant='secondary'
              data-testid={`badge-genre-${genre.toLowerCase()}`}
            >
              {genre}
            </Badge>
            <Badge
              variant={status === "published" ? "default" : "outline"}
              data-testid={`badge-status-${status}`}
            >
              {status === "published" ? "Published" : "Coming Soon"}
            </Badge>
          </div>
        </div>

        <h3
          className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors'
          data-testid='text-book-title'
        >
          {title}
        </h3>

        <div className='flex items-center gap-2 text-muted-foreground text-sm mb-3'>
          <Calendar className='size-4' />
          <span data-testid='text-publication-year'>{publicationYear}</span>
        </div>

        <p
          className='text-muted-foreground leading-relaxed mb-4'
          data-testid='text-book-description'
        >
          {description}
        </p>
      </CardContent>

      <CardFooter className='p-6 pt-0 gap-3'>
        <Button
          size='sm'
          className='flex-1'
          //   onClick={handleReadMoreClick}
          data-testid='button-read-more'
        >
          Read Book
          <ExternalLink className='w-4 h-4 mr-2' />
        </Button>
        {/* {status === "published" && (
          <Button
            size='sm'
            className='flex-1'
            data-testid='button-purchase'
          >
            <ExternalLink className='w-4 h-4 mr-2' />
            Purchase
          </Button>
        )} */}
      </CardFooter>
    </Card>
  );
};

export default BookCard;

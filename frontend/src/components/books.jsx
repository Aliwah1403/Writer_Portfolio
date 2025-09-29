import React, { useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Grid, List } from "lucide-react";
import BookCard from "./book-card";

const books = [
  {
    title: "The Silent Garden",
    description:
      "A haunting tale of love, loss, and redemption set against the backdrop of a mysterious garden that holds secrets from the past. This literary masterpiece explores themes of memory, family, and the healing power of nature.",
    coverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    publicationYear: 2023,
    genre: "Literary Fiction",
    status: "published",
    purchaseLink: "https://example.com/silent-garden",
  },
  {
    title: "Whispers of Dawn",
    description:
      "A collection of intimate poetry exploring the delicate moments between night and day, capturing the beauty of quiet transitions and the profound insights found in stillness. Each poem is a meditation on presence and possibility.",
    coverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    publicationYear: 2022,
    genre: "Poetry",
    status: "published",
    purchaseLink: "https://example.com/whispers-dawn",
  },
  {
    title: "Tales from the Heart",
    description:
      "An upcoming collection of short stories that delve into the complexities of human relationships, featuring characters navigating love, loss, hope, and transformation in contemporary settings.",
    coverImage:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/guri3/img5.jpeg",
    publicationYear: 2024,
    genre: "Short Stories",
    status: "upcoming",
  },
];

const BooksPage = () => {
  const [viewMode, setVieMode] = useState("grid");
  const [genreFilter, setGenreFilter] = useState("all");

  const genres = ["all", "Literary Fiction", "Poetry", "Short Stories"];

  const filteredBooks =
    genreFilter === "all"
      ? books
      : books.filter((book) => book.genre === genreFilter);

  const handleViewModeChange = (mode) => {
    setVieMode(mode);
  };

  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
  };
  return (
    <section className='py-32'>
      <div className='container'>
        <div className='mb-16 text-center'>
          <h1 className='text-5xl font-medium md:text-6xl'>My Books</h1>
          <p className='mx-auto mt-4 max-w-xl text-lg text-muted-foreground'>
            A collection of published works spanning literary fiction and short
            stories. Each work represents a journey into the depths of human
            experience and the beauty of language.
          </p>
        </div>

        {/* Filters and View Controls */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-4 mb-8'>
          <div className='flex flex-wrap gap-2'>
            {genres.map((genre) => {
              const isActive = genreFilter === genre;
              const genreCount =
                genre === "all"
                  ? books.length
                  : books.filter((b) => b.genre === genre).length;

              return (
                <Button
                  key={genre}
                  variant={isActive ? "default" : "outline"}
                  size='sm'
                  onClick={() => handleGenreFilter(genre)}
                  data-testid={`button-genre-${genre
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                >
                  {genre === "all" ? "All Books" : genre}
                  <Badge variant='secondary' className='ml-2'>
                    {genreCount}
                  </Badge>
                </Button>
              );
            })}
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-sm text-muted-foreground mr-2'>View:</span>
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              size='sm'
              onClick={() => handleViewModeChange("grid")}
              data-testid='button-grid-view'
            >
              <Grid className='w-4 h-4' />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "outline"}
              size='sm'
              onClick={() => handleViewModeChange("list")}
              data-testid='button-list-view'
            >
              <List className='w-4 h-4' />
            </Button>
          </div>
        </div>

        {/* Results Count */}
        <div className='mb-6'>
          <p
            className='text-muted-foreground'
            data-testid='text-resuslts-count'
          >
            Showing {filteredBooks.length} book
            {filteredBooks.length !== 1 ? "s" : ""}{" "}
            {genreFilter !== "all" && `in ${genreFilter}`}
          </p>
        </div>

        {viewMode === "grid" ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {filteredBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>
        ) : (
          <div className='space-y-6'>
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className='grid md:grid-cols-4 gap-6 p-6 border border-border rounded-lg hover-elevate'
                data-testid={`list-book-${book.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
              >
                <div className='md:col-span-1'>
                  <img
                    src={book.coverImage}
                    alt={`${book.title} book cover`}
                    className='w-48 h-64 object-cover rounded-lg mx-auto'
                  />
                </div>
                <div className='md:col-span-3'>
                  <div className='flex items-start justify-between mb-3'>
                    <div className='flex gap-2'>
                      <Badge variant='secondary'>{book.genre}</Badge>
                      <Badge
                        variant={
                          book.status === "published" ? "default" : "outline"
                        }
                      >
                        {book.status === "published"
                          ? "Published"
                          : "Coming Soon"}
                      </Badge>
                    </div>
                    <span className='text-sm text-muted-foreground'>
                      {book.publicationYear}
                    </span>
                  </div>
                  <h3 className='font-serif text-2xl font-semibold mb-3'>
                    {book.title}
                  </h3>
                  <p className='text-muted-foreground leading-relaxed mb-4'>
                    {book.description}
                  </p>
                  <div className='flex gap-3'>
                    <Button variant='outline' size='sm'>
                      Read More
                    </Button>
                    {book.status === "published" && (
                      <Button size='sm'>Purchase</Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BooksPage;

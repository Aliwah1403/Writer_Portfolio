import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Grid, List, Loader2, ExternalLink } from "lucide-react";
import BookCard from "./book-card";
import BookCover from "@/assets/BookCover.png";
import { client } from "../sanity/client";
import {
  getGenreDisplayName,
  getBookImageUrl,
  getBookImageAlt,
} from "../lib/book-utils";
import { useNavigate } from "react-router";

const BOOKS_QUERY = `*[_type == "books"] | order(publicationYear desc) {
  _id,
  title,
  slug,
  description,
  coverImage {
    asset->{
      _id,
      url
    },
    alt
  },
  publicationYear,
  genre,
  status
}`;

const BooksPage = () => {
  const navigate = useNavigate();
  const [viewMode, setVieMode] = useState("grid");
  const [genreFilter, setGenreFilter] = useState("all");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch books from Sanity
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        setLoading(true);
        const data = await client.fetch(BOOKS_QUERY);
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to load books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  // Get unique genres from fetched books
  const genres = [
    "all",
    ...new Set(books.map((book) => getGenreDisplayName(book.genre))),
  ];

  const filteredBooks =
    genreFilter === "all"
      ? books
      : books.filter((book) => getGenreDisplayName(book.genre) === genreFilter);

  const handleViewModeChange = (mode) => {
    setVieMode(mode);
  };

  const handleGenreFilter = (genre) => {
    setGenreFilter(genre);
  };

  // Loading state
  if (loading) {
    return (
      <section className='py-32'>
        <div className='container'>
          <div className='flex items-center justify-center min-h-[400px]'>
            <div className='flex flex-col items-center gap-4'>
              <Loader2 className='h-8 w-8 animate-spin' />
              <p className='text-muted-foreground'>Loading books...</p>
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
                    src={getBookImageUrl(book.coverImage) || BookCover}
                    alt={getBookImageAlt(book.coverImage, book.title)}
                    className='w-48 h-64 object-cover rounded-lg mx-auto'
                  />
                </div>
                <div className='md:col-span-3'>
                  <div className='flex items-start justify-between mb-3'>
                    <div className='flex gap-2'>
                      <Badge variant='secondary'>
                        {getGenreDisplayName(book.genre)}
                      </Badge>
                      <Badge
                        variant={
                          book.status === "published" ? "default" : "outline"
                        }
                      >
                        {book.status === "published"
                          ? "Published"
                          : book.status === "upcoming"
                          ? "Coming Soon"
                          : "Draft"}
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
                  <Button
                    size='sm'
                    className='flex-1'
                    data-testid='button-read-more'
                    onClick={() => navigate(`/books/${book.slug.current}`)}
                  >
                    Read Book
                    <ExternalLink className='w-4 h-4 mr-2' />
                  </Button>
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

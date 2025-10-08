// Utility functions for book data handling

export const getGenreDisplayName = (genreValue) => {
  const genreMap = {
    literary_fiction: "Literary Fiction",
    poetry: "Poetry",
    short_stories: "Short Stories",
    non_fiction: "Non-Fiction",
    essay: "Essay",
    memoir: "Memoir",
  };
  return genreMap[genreValue] || genreValue;
};

export const getStatusDisplayName = (statusValue) => {
  const statusMap = {
    published: "Published",
    upcoming: "Coming Soon",
    draft: "Draft",
  };
  return statusMap[statusValue] || statusValue;
};

export const getBookImageUrl = (coverImage) => {
  return coverImage?.asset?.url || null;
};

export const getBookImageAlt = (coverImage, title) => {
  return coverImage?.alt || `${title} book cover`;
};

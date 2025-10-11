export const getCategoryDisplayName = (categoryValue) => {
  const categoryMap = {
    article: "Article",
    academic_paper: "Academic Paper",
    essay: "Essay",
    short_story: "Short Story",
    memoir: "Memoir",
    travelogue: "Travelogue",
    review: "Review",
    interview: "Interview",
    book_review: "Book Review",
    news: "News",
    opinion: "Opinion",
    op_ed: "Op-Ed",
    letter: "Letter",
    announcement: "Announcement",
  };
  return categoryMap[categoryValue] || categoryValue;
};

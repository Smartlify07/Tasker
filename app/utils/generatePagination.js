export const generatePagination = (totalPages, currentPage) => {
  let pagination = [];
  const firstPage = 1;
  const lastPage = totalPages;

  if (totalPages <= 5) {
    pagination = Array.from({ length: totalPages }, (_, i) => i + 1);
  } else if (currentPage <= 5) {
    pagination = [1, 2, 3, 4, 5, "...", lastPage];
  } else if (currentPage > 5 && currentPage <= totalPages - 5) {
    pagination = [
      firstPage,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      lastPage,
    ];
  } else {
    pagination = [
      firstPage,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return pagination;
};

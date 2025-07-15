export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 2) {
    return [1, 2, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 1) {
    return [1, 2, '...', totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

export const roundDecimal = (num: number) =>
  (Math.round(num * 100) / 100).toFixed(2);


export const formatMoney = (num: number|string) =>
   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


export const formattedDate = (date) => {
  const dateObj = new Date(date);
  return dateObj
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
};

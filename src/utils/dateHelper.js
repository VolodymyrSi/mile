export const FormattedDate = (dateObj) => {
  dateObj = new Date(dateObj);
  return dateObj
    .toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
};

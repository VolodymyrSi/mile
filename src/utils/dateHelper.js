export const FormattedDate = (dateObj) => {
  dateObj = new Date(dateObj);
  return dateObj
    .toLocaleDateString('en-GB', {
      // you can use undefined as first argument
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    })
    .replace(/\//g, '-');
};

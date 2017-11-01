export const createReview = (data) => {
  debugger
  return $.ajax({
    method: 'post',
    url: 'api/reviews',
    data
  });
};

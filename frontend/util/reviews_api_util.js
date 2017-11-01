export const createReview = (data) => {
  return $.ajax({
    method: 'post',
    url: 'api/reviews',
    data
  });
};

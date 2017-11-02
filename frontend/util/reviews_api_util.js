export const createReview = (data) => {
  debugger
  return $.ajax({
    method: 'post',
    url: 'api/reviews',
    data
  });
};

export const editReview = (data) => {
  debugger
  return $.ajax({
      method: 'patch',
      url: `api/reviews/${data.id}`,
      data
  });
};

export const deleteReview = (id) => {
  debugger
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${id}`,
  });
};

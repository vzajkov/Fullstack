export const createReview = (data) => {
  
  return $.ajax({
    method: 'post',
    url: 'api/reviews',
    data
  });
};

export const editReview = (data) => {
  
  return $.ajax({
      method: 'patch',
      url: `api/reviews/${data.id}`,
      data
  });
};

export const deleteReview = (id) => {
  
  return $.ajax({
    method: 'delete',
    url: `api/reviews/${id}`,
  });
};

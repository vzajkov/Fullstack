
export const fetchFilteredBusinesses = (data) => {
  //
  return $.ajax({
    method: 'get',
    url: 'api/businesses',
    data
  });
};

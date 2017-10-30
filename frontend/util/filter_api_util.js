
export const fetchFilteredBusinesses = (data) => {
  debugger
  return $.ajax({
    method: 'get',
    url: 'api/businesses',
    data
  });
};

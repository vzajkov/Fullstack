
export const fetchBusinesses = (data) => {
  return $.ajax({
    method: 'get',
    url: 'api/businesses',
    data
  });
};

export const fetchBusiness = (business) => {
  return $.ajax({
    method: 'get',
    url: `api/business/${business.id}`,
    data: business
  });
};


export const fetchBusinesses = () => {
  return $.ajax({
    method: 'get',
    url: 'api/businesses',
  });
};

export const fetchBusiness = (business) => {
  return $.ajax({
    method: 'get',
    url: `api/business/${business.id}`,
    data: business
  });
};

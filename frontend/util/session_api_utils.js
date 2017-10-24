export const login = (user) => {
  return $.ajax(
    {
      url: "api/session",
      method: "post",
      data: { user }
    }
  );
};

export const logout = (user) => {
  return $.ajax(
    {
      url: "api/session",
      method: "delete",
      data: { user }
    }
  );
};

export const signup = (user) => {
  return $.ajax(
    {
      url: "api/users",
      method: "post",
      data: { user }
    }
  );
};

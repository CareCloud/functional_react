export const profile = {
  initialState: {
    firstName: "Jonathan",
    lastName: "Rose"
  },
  reducers: {
    setProfile: (state, { firstName, lastName }) => ({
      ...state,
      firstName,
      lastName
    })
  }
};

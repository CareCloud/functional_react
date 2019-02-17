export const snackBar = {
  initialState: {
    message: "",
    remove: false
  },
  reducers: {
    setMessage: (state, { message }) => ({
      ...state,
      message
    }),
    setRemove: (state, { remove }) => ({
      ...state,
      remove,
      ...(remove ? {} : { message: "" })
    })
  }
};

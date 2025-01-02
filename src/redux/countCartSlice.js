const { createSlice } = require("@reduxjs/toolkit");
// const initUser = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : [];
let init = 0;
console.log(13, init);
const countCartSlice = createSlice({
  name: "count_cart_product",
  initialState: init,
  reducers: {
    setCartCount: function (state, action) {
      return action.payload;
    },
  },
});

export const { setCartCount } = countCartSlice.actions;
export const countCartSliceReducer = countCartSlice.reducer;

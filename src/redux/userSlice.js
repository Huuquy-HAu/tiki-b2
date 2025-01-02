const { createSlice } = require("@reduxjs/toolkit");
// const initUser = localStorage.getItem("user")
//   ? JSON.parse(localStorage.getItem("user"))
//   : [];
let string = window.localStorage.getItem("tiki-user");
console.log(2, string);
let init;
if (!string) {
  init = {};
} else {
  init = JSON.parse(string);
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

const userSlice = createSlice({
    name: 'user',
    initialState: init,
    reducers: {
        userLogin: function(state, action) {
            window.localStorage.getItem('tiki-user', JSON.stringify(action.payload))
            getCookie('tiki-user', JSON.stringify(action.payload))
            return action.payload;
        },
        updateInfo: function( state, action) {
            window.localStorage.setItem('tiki-user', JSON.stringify(action.payload));
            return action.payload
        }
    }
})

export const { userLogin, updateInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;

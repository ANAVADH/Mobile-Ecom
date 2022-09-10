// import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from "./UserRedux";

import { publicRequest,  } from "../requestMethord.js";
import { login } from "./AuthRedux";
// import { addProducts } from "./cartRedux.js";
// export const register = async (dispatch, user) => {
//   dispatch(registerStart())
//   try {
//       const res = await publicRequest.post("auth/register", user)
//       dispatch(registerSuccess(res.data))
//   } catch (err) {
//       dispatch(registerFailure())
//   }
// }

 ;

 


export const Signin = async (dispatch, user) => {

  
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(login(res.data));
  } catch (err) {
    
      console.log(err)


    


  }
};


// export const login = async (dispatch, user) => {
//   dispatch(loginStart())
//   try {
//     const res = await publicRequest.post("/auth/login", user)
//     dispatch(loginSuccess(res.data))
//   } catch (error) {
//     dispatch(loginFailure())
//   }
// }
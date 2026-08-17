import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
  status: "",
};

 const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer:{ 
      prepare(fullName, nationalId) {
        return { payload: { fullName, nationalId, createdAt: new Date().toISOString() } };
      },
      reducer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalId = action.payload.nationalId;
      state.createdAt = action.payload.createdAt;
    }
  },}
});



export const { createCustomer } = customerSlice.actions;

export default customerSlice.reducer;
//   status: "",
// };

// export default function customerReducer(state = intialStateCoustmer, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payload.fullName,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload.createdAt,
//       };
//     case "customer/updateCustomer":
//       return { ...state, fullName: action.payload.fullName };
//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: { fullName, nationalId, createdAt: new Date().toISOString() },
//   };
// }

// export function updateCustomer(fullName) {
//   return { type: "customer/updateCustomer", payload: { fullName } };
// }




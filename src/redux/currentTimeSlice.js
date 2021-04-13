import { createSlice } from "@reduxjs/toolkit";

const currentTimeSlice = createSlice( {
    name: "currentTime",
    initialState: 0,
    reducers: {
      incrementTime( state ) {
        return state + 1;
      },
      clearTime() {
        return 0;
      }
    }
  } );
  
  export const { incrementTime, clearTime } = currentTimeSlice.actions;
  export default currentTimeSlice.reducer;
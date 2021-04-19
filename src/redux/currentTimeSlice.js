import { createSlice } from "@reduxjs/toolkit";

const currentTimeSlice = createSlice( {
    name: "currentTime",
    initialState: { running: false, clock: 240 },
    reducers: {
      decrementTime( state ) {
        if ( state.running && state.clock > 0 ) { return { running: state.running, clock: state.clock - 1 }; }
        else { return state; }
      },
      resetTime( state ) {
        return { running: state.running, clock: 240 };
      },
      runTimer( state ) {
        return { running: true, clock: state.clock };
      },
      stopTimer( state ) {
        return { running: false, clock: state.clock };
      }
    }
  } );
  
  export const { decrementTime, resetTime, runTimer, stopTimer } = currentTimeSlice.actions;
  export default currentTimeSlice.reducer;
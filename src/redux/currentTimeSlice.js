import { createSlice } from "@reduxjs/toolkit";

const currentTimeSlice = createSlice( {
    name: "currentTime",
    initialState: { running: false, clock: 0 },
    reducers: {
      incrementTime( state ) {
        if ( state.running ) { return { running: state.running, clock: state.clock + 1 }; }
        else { return state; }
      },
      clearTime( state ) {
        return { running: state.running, clock: 0 };
      },
      runTimer( state ) {
        return { running: true, clock: state.clock };
      },
      stopTimer( state ) {
        return { running: false, clock: state.clock };
      }
    }
  } );
  
  export const { incrementTime, clearTime, runTimer, stopTimer } = currentTimeSlice.actions;
  export default currentTimeSlice.reducer;
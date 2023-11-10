import { createSlice } from "@reduxjs/toolkit";

const classSlice = createSlice({
  name: "classes",
  initialState: {
    classes: [],
  },
  reducers: {
    getClasses: (state, actions)=>{
        state.classes = actions.payload.map(classes=>{
            return {id: classes._id, name: classes.name}
        })
    }
  },
});

export const {  getClasses   } = classSlice.actions;
export default classSlice.reducer;

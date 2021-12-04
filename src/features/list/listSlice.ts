import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface listState {
    jobs: string[]
};

const initialState: listState = {
    jobs:[]
};

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addJob: (state, action: PayloadAction<string>) => {
            if(action.payload === ""){
                return state;
            };
            state.jobs.push(action.payload);
        },
        deleteJob: (state, action:PayloadAction<number>) => {
            state.jobs.splice(action.payload,1);
        }
    }
});
export const { addJob, deleteJob } = listSlice.actions;
export const selectList = (state: RootState) => state.list.jobs;
export default listSlice.reducer;

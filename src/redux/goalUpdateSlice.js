
import { createSlice } from '@reduxjs/toolkit';
export const goalUpdateSlice = createSlice({
    name: 'goalUpdate',
    initialState: {
        isUpdated: false,
    },
    reducers: {
        setIsUpdated: (state, action) => {
            state.isUpdated = action.payload;
        }
    },
})

export const { setIsUpdated } = goalUpdateSlice.actions;
export default goalUpdateSlice.reducer;
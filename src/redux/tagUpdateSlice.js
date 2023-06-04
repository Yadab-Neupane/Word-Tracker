
import { createSlice } from '@reduxjs/toolkit';
export const tagUpdateSlice = createSlice({
    name: 'tagUpdate',
    initialState: {
        isUpdated: false,
    },
    reducers: {
        setIsUpdated: (state, action) => {
            state.isUpdated = action.payload;
        }
    },
})

export const { setIsUpdated } = tagUpdateSlice.actions;
export default tagUpdateSlice.reducer;
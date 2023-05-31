
import { createSlice } from '@reduxjs/toolkit';
export const tagUpdateSlice = createSlice({
    name: 'tagUpdate',
    initialState: {
        isUpdating: false,
    },
    reducers: {
        setIsUpdating: (state, action) => {
            state.isUpdating = action.payload;
        }
    },
})

export const { setIsUpdating } = tagUpdateSlice.actions;
export default tagUpdateSlice.reducer;
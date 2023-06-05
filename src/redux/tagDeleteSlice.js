
import { createSlice } from '@reduxjs/toolkit';
export const tagDeleteSlice = createSlice({
    name: 'tagDelete',
    initialState: {
        isDeleteInProcess: false,
    },
    reducers: {
        setIsDeleteInProcess: (state, action) => {
            state.isDeleteInProcess = action.payload;
        }
    },
})

export const { setIsDeleteInProcess } = tagDeleteSlice.actions;
export default tagDeleteSlice.reducer;
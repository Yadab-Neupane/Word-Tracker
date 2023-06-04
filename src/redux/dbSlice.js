
import { createSlice } from '@reduxjs/toolkit';
export const dbSlice = createSlice({
    name: 'db',
    initialState: {
        exists: false,
    },
    reducers: {
        setExists: (state, action) => {
            state.exists = action.payload;
        }
    },
})

export const { setExists } = dbSlice.actions;
export default dbSlice.reducer;
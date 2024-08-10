import { createSlice } from "@reduxjs/toolkit";

const rtnSlice = createSlice({
    name: 'realTimeNotification',
    initialState: {
        likeNotification: [],
    },
    reducers: {
        setLikeNotification: (state, action) => {
            if (Array.isArray(action.payload) && action.payload.length === 0) {
                // Clear the notification array
                state.likeNotification = [];
            } else if (action.payload.type === 'like') {
                state.likeNotification.push(action.payload);
            } else if (action.payload.type === 'dislike') {
                state.likeNotification = state.likeNotification.filter((item) => item.userId !== action.payload.userId);
            }
        },
    },
});

export const { setLikeNotification } = rtnSlice.actions;
export default rtnSlice.reducer;

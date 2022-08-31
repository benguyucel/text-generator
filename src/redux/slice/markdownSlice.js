import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    markText: `# Heading level 1 `
}
export const markDownSlice = createSlice({
    name: "markdown",
    initialState
    , reducers: {
        changceText: (state, action) => {
            if (!action.payload) { return initialState }
            state.markText = action.payload
        }
    }
})

export const { changceText } = markDownSlice.actions
export default markDownSlice.reducer
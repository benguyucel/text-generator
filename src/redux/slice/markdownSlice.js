import { createSlice } from "@reduxjs/toolkit"

export const markDownSlice = createSlice({
    name: "markdown", initialState: {
        text: ""
    }
})
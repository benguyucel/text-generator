import { configureStore } from '@reduxjs/toolkit'
import markDownSlice from './slice/markdownSlice'
export const store = configureStore({
    reducer: {
        markdownText: markDownSlice
    }
})
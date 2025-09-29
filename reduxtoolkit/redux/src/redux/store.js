import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../feature/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

//steps
//create store
//wrap app component under provider
//create slice
//register reducer in store

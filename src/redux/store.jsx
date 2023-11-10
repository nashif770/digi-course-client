import {configureStore} from '@reduxjs/toolkit'
import classSlice from './classSlice';

const store = configureStore({
    reducer: {
      classes: classSlice
    }
  })

  export default store;
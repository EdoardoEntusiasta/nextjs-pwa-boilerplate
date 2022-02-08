import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@stores/reducers/counterReducer'

export default configureStore({
  reducer: {
    counter: counterReducer
  },
})

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../reducer/userreducer";

const store = configureStore ({
    reducer:{
        profile: userReducer,
    },
})

export default store;
import React from "react";
import { useSelector } from "react-redux";
import {Navigate} from  "react-router-dom"


function PrivateRoute ({element}) {

    const token = localStorage.getItem('token');

    if (token) {
        return element
    } else   {
        return <Navigate to ='/error'/>
    }
}
export default PrivateRoute
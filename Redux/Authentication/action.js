import axios from "axios";
import * as types from "./actionTypes";

const register=(payload)=>(dispatch)=>{
    //console.log(payload)
    //dispatch({type:types.REGISTER_REQUEST});
    //console.log(payload)
    return axios
    .post("http://localhost:8081/user/add",payload)
    .then((r) => {
        dispatch({type:types.REGISTER_REQUEST, payload:r.data})
        return types.REGISTER_SUCCESS
    })

    .catch((e)=>{dispatch({type:types.REGISTER_FAILURE,payload:e})
return types.REGISTER_FAILURE});

};

const loginApi=(creds)=>(dispatch)=>{
	return axios
    .post("http://localhost:8081/user/validate",creds)
    .then((r) => {
        dispatch({type:types.REGISTER_REQUEST, payload:r.data})
        return types.REGISTER_SUCCESS
    })

    .catch((e)=>{dispatch({type:types.REGISTER_FAILURE,payload:e})
    return types.REGISTER_FAILURE});
};



const setEmailData = (email) => (dispatch) => {
    dispatch({type:types.SET_EMAIL_DATA, payload:email})
} 

const setloginEmailData = (email) => (dispatch) => {
    dispatch({type:types.LOGIN_EMAIL_DATA, payload:email})
} 


export{register,setEmailData,setloginEmailData,loginApi};
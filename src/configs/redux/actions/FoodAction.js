import axios from "axios"
import Swal from "sweetalert2"
import * as string from "../string"

export const getFood = (page = 1) => (dispatch)=>{
   axios.get(`${process.env.REACT_APP_BACKEND_API}/food?page=${page}&limit=6`)
   .then((res)=>{
       const result = res.data
       console.log(res.data, 'ini action getfood');
       dispatch({type: string.GET_FOOD, payload: result})
   })
   .catch((err)=>{
       console.log(err);
   })
}

export const addFood = (data) => (dispatch) =>{
    const formData = new FormData();
    formData.append("foodname", data.foodname);
    formData.append("image", data.image);
    formData.append("qty", data.qty);
    formData.append("price", data.price);
    formData.append("idcategory", data.idcategory);
    axios.post(`${process.env.REACT_APP_BACKEND_API}/food`, formData)
    .then((res)=>{
        const product = res.data.data
        console.log(product, 'ini action');
        dispatch({type: string.ADD_FOOD, payload: product})
        Swal.fire("Insert Succes", "Data Successfully inserted", "success");
    })
    .catch((err)=>{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: err?.response?.data?.error?.message,
          })
    })
}
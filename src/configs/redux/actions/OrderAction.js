import axios from "axios";
import Swal from "sweetalert2";
import * as string  from "../string"
export const addOrder = (foodName, name, totalprice, invoice, iduser)=>
  (dispatch) => {
   const dataOrder = {
    foodName, 
    name,
    totalprice, 
    invoice,
    iduser}
   axios.post(`${process.env.REACT_APP_BACKEND_API}/orders`, dataOrder)
   .then((result)=>{
    const resultOrder = result.data.data;
    dispatch({ type: string.ADDORDER, payload: resultOrder });
    Swal.fire(
        "Order Success",
        "Thank you for ordering our food!",
        "success"
      );
   })
   .catch((error) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error?.message,
    });
  });
}

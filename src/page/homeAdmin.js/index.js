import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Buttons, ClassicField, FoodCard } from "../../component/atom";
import { Navbar, RightBar } from "../../component/molecule";
import { StyledAdmin } from "./Styled";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import { useFormik } from "formik";
import * as Yup from "yup";

const HomeAdmin = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [foodDetail, setFoodDetail] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [errImageSize, setErrImage] = useState(false);
  const [errImageType, setErrImageType] = useState(false);
  // const [preview, setImagePreview] = useState(null);
  const [form, setform] = useState({
    idfood:'',
    foodname : '',
    qty : '',
    price: '',
    image : null,
    imagePreview: null
  })
 console.log(form);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/food/`)
      .then((res) => {
        setItems(res.data.item);
        // console.log(res);
        // setTotalPage(res.data.totalpage);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // const handlePagination = () => {
  //   setPage((current) => current + 1);
  // };
  const handleDelete = (idfood) => {
    axios
      .delete(`${process.env.REACT_APP_BACKEND_API}/food/` + idfood)
      .then(() => {
        Swal.fire("delete Succes", "food item has been deleted", "success");
        axios
          .get(`${process.env.REACT_APP_BACKEND_API}/food/`)
          .then((res) => {
            setItems(res.data.item);
            // setTotalPage(res.data.totalpage);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message,
        });
      });
  };
  const handleShow = (idfood) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/food/` + idfood)
      .then((res) => {
        // setFoodDetail(res.data.data);
        const data = res.data.data[0]
        setform({
          idfood: data.idfood,
          foodname : data.foodname,
          qty : data.qty,
          price: data.price,
          image : data.image,
        })
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(true);
  };
  const handleImage = (e) => {
    setform({
      ...form,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0])
    })
  };
  const formData = new FormData()
  formData.append('foodname', form.foodname)
  formData.append('qty', form.qty)
  formData.append('price', form.price)
  formData.append('image', form.image)

  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.patch(`${process.env.REACT_APP_BACKEND_API}/food/${form.idfood}`, formData)
      .then((res)=>{
        Swal.fire("Edit Succes", "food data has been updated", "success");
        axios
          .get(`${process.env.REACT_APP_BACKEND_API}/food/`)
          .then((res) => {
            setItems(res.data.item);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response?.data?.message,
        });
      });
  }
  const handleChange = (e) =>{
      setform({
        ...form,
        [e.target.name] : e.target.value
      })
  }

  return (
    <StyledAdmin>
      <div className="wrapper">
        <div className="left-container">
          <Navbar
            NavbarSize="nav"
            sidebarSize="sidebar"
            title="Food Items"
            search
            historyPage="/history"
          />
          <div className="food-items-wrapper">
            <div className="row">
              {items.map((item, index) => (
                <div className="col-md-3 lg-4">
                  <button
                    className="button-delete"
                    onClick={() => handleDelete(item.idfood)}
                  >
                    <i class="fa fa-trash-o" aria-hidden="true"></i>
                  </button>
                  <FoodCard
                    className="foodcard"
                    // chcecklist={checked(item.idfood)}
                    // onClick={() => addCart(item, index)}
                    title={item.foodname}
                    image={item.image}
                    price={item.price}
                    onClick={() => handleShow(item.idfood)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        fade={false}
        onHide={handleClose}
        backdropC="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>  Edit Food</Modal.Title>
        </Modal.Header>
            <form>
              <Modal.Body>
              <input
                    name="foodname"
                    type="text"
                    value={form.idfood}
                    className="form-control"
                    hidden
                    readOnly
                  />
                <div className="form-group">
                  <label for="exampleInputEmail1">Food Name:</label>
                  <input
                    name="foodname"
                    type="text"
                    value={form.foodname}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1">Quantity</label>
                  <input
                    name="qty"
                    value={form.qty}
                    type="text"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
                <Image >
                  <div className="profile-wrapper">
                    <img
                      className="images"
                      src={
                        form.imagePreview
                          ? form.imagePreview
                          : form.image
                      }
                      alt=""
                    />
                    <div className="profile-btn">
                      <input
                        id="upload"
                        type="file"
                        name="image"
                        onChange={handleImage}
                      />
                      <label className="button" for="upload">
                        <i className="fa fa-pencil" aria-hidden="true"></i>
                      </label>
                    </div>
                    {errImageSize ? (
                      <p className="error">Image size is too large. max 1mb</p>
                    ) : (
                      ""
                    )}
                    {errImageType ? (
                      <p className="error">
                        Invalid file type. only png, jpg, and jpeg format
                        allowed
                      </p>
                    ) : (
                      ""
                    )}
                  </div>
                </Image>
                <div className="form-group">
                  <label for="exampleInputEmail1">Price</label>
                  <input
                    type="text"
                    value={form.price}
                    name="price"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <StyledBtn>
                <Buttons type="button" onClick={handleSubmit} className="button" color="blue">Edit</Buttons>
                <Buttons onClick="" className="button cancel" color="pink" onClick={show}>Cancel</Buttons>
                </StyledBtn>
              </Modal.Footer>
            </form>
          {/* </>
      ))} */}
      </Modal>
    </StyledAdmin>
  );
};

export default HomeAdmin;
const StyledBtn = styled.div`
  .button{
    width: 75px;
    height: 50px;
  }
  .cancel{
    margin-left: 5px;
  }
`
const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
  .profile-wrapper{
          width: 120px;
          height: 120px;
          margin-top: 35px;
          background: #D4D4D4;
          /* border-radius: 100%; */
          position: relative;
      .images{
          object-fit: cover;
          width: 100%;
          height: 100%;
          /* border-radius: 30px; */
          }
      .error{
          color: red;
      }
      }
      .profile-btn{
          position: relative;
          display: flex;
          input[type="file"] {
              position: absolute;
              top: 15px;
              left: 20px;
              visibility: hidden;
              font-size: 17px;
              color: #b8b8b8;
          }
          .button {
              display: inline-block;
              background-color: #7E98DF;
              border-radius: 50%;
              color: #ffffff;
              text-align: center;
              font-size: 20px;
              padding: 8px;
              width: 50px;
              height: 50px;
              transition: all 0.5s;
              cursor: pointer;
              margin: 5px;
              position:absolute;
              left: 70%;
              top:1;
              bottom: 0;
          }
          .button:hover {
                  background-color: #715ce4;
              }
      }

`;

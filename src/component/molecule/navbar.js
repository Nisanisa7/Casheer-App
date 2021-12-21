import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { AddIcon, ClipIcon, FoodIcon } from "../../assets/icons";
import { Buttons, ClassicField } from "../atom";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { addFood, getFood } from "../../configs/redux/actions/FoodAction";
import { useDispatch } from "react-redux";

const Navbar = ({ title, NavbarSize, sidebarSize, search, historyPage, home, history, Add }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Category, setCategory] = useState([]);
  const [items, setItems] = useState([]);
  const dispatch = useDispatch()
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_API}/food/category`)
      .then((res) => {
        setCategory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const [form, setForm] = useState({
    foodname: "",
    qty: "",
    image: null,
    imagePreview: null,
    price: "",
    idcategory: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleImage = (e) => {
    setForm({
      ...form,
      image: e.target.files[0],
      imagePreview: URL.createObjectURL(e.target.files[0]),
    });
  };
  // const formData = new FormData();
  // formData.append("foodname", form.foodname);
  // formData.append("image", form.image);
  // formData.append("qty", form.qty);
  // formData.append("price", form.price);
  // formData.append("idcategory", form.idcategory);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFood(form))

    // axios
    //   .post(`${process.env.REACT_APP_BACKEND_API}/food`, formData)
    //   .then((res) => {
    //     Swal.fire("Insert Succes", "Data Successfully inserted", "success");
    //     // setTimeout(() => productList(), 3000);
    //     axios
    //       .get(`${process.env.REACT_APP_BACKEND_API}/food/`)
    //       .then((res) => {
    //         setItems(res.data.item);
    //         console.log(res.data.item, 'ini di navbar')
    //         // setTotalPage(res.data.totalpage);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });
    //   })
      // .catch((err) => {
      //   alert(err);
      // });
  };
  const handleLogout = () =>{
    localStorage.clear();
    window.location.href = "/login";
    setTimeout(window.location.href, 8000)
   }
  return (
    <Styles>
      <nav className={`navbar ${NavbarSize}`}>
        <div className="button-dropdown">
          <button className="toggle-head" onClick="">
            <div className="menu-toggle">
              <span className="span"></span>
              <span className="span"></span>
              <span className="span"></span>
            </div>
          </button>
        </div>
        <div className="title f-30">{title}</div>
        {search ?
        <div className="search-btn">
          <button>
            <i class="fa fa-search fa-2x" aria-hidden="true"></i>
          </button>
        </div>: <div className="search-btn"></div> }
      </nav>
      <div className={`sidebar ${sidebarSize}`}>
        <ul className="side-menu">
          <li className="list-menu1">
            <button>
              <Link to={home}>
              <img src={FoodIcon} alt="" />
              </Link>
            </button>
          </li>
            { history &&
          <li>
            <button>
              <Link to={historyPage}>
              <img src={ClipIcon} alt="" />
              </Link>
            </button>
          </li>}

          { Add && 
          <li>
            <button
              onClick={handleShow}
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <img src={AddIcon} alt="" className="img-add" />
            </button>
          </li>
        }

          <li>
            <button onClick={()=>handleLogout()} className="log">
            <i class="fa fa-sign-out fa-2x" aria-hidden="true"></i>
            </button>
          </li>
        </ul>
      </div>

      <Modal
        show={show}
        fade={false}
        onHide={handleClose}
        backdropC="static"
        keyboard={false}
      >
        <Modal.Header closeButton className="title-modal f-35">
          Add Item
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                name="foodname"
                type="text"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Quantity</label>
              <input
                name="qty"
                type="text"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Image</label>
              <input
                type="file"
                name="image"
                className="form-control"
                onChange={handleImage}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Price</label>
              <input
                type="text"
                name="price"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Category</label>
              <select
                className="custom-select button-status form-control"
                name="idcategory"
                id="inputGroupSelect01"
                onChange={handleChange}
              >
                {Category.map((item) => (
                  <option key={item.idcategory} value={item.idcategory}>
                    {item.categoryname}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Buttons color="pink">Cancel</Buttons>
          <Buttons color="blue" onClick={handleSubmit}>
            Add
          </Buttons>
        </Modal.Footer>
      </Modal>
    </Styles>
  );
};

export default Navbar;
const Styles = styled.div`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  .navbar {
    display: flex;
    justify-content: space-between;
    background: #ffffff;
    padding-right: 33px;
    padding-left: 33px;
    margin-right: auto;
    margin-left: auto;
    .button-dropdown {
      .toggle-head {
        outline: none;
        border: none;
        background: transparent;
        .menu-toggle {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 20px;
        }
        .menu-toggle span {
          display: block;
          height: 3.3px;
          background: black;
          border-radius: 20px;
        }
        .span {
          width: 30px;
          height: 20px;
        }
      }
    }
    .search-btn {
      button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
      }
    }
  }
  .sidebar {
    width: 109px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    background: #FFFFFF;
    height: 100vh;
    position: absolute;
    transition: 0.3s all ease-in-out;

    .side-menu {
      margin-right: 33px;
      list-style: none;
      .list-menu1 {
        margin-top: 32px;
      }
      li {
        margin-bottom: 50px;
        button {
          border: none;
          background: none;

          img {
            width: 40px;
            height: 40px;
          }
          .img-add{
            width: 35px;
            height: 35px;
          }
        }
        .log{
          margin-left: 5px;
        }
        button:hover {
          background: #dfe2db;
          border-radius: 10px;
        }
      }
    }
  }
  .item-modal {
    .item-name {
      label {
        margin-top: 20px !important;
      }
    }
  }
`;

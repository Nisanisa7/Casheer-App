import React, { useEffect, useState } from "react";
import { Navbar } from "../../component/molecule";
import styled from "styled-components";
import { BasicCard, LineChart, SmallCards } from "../../component/atom";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";

const History = () => {
const cashier = useSelector(state => state.user.profile)
const [history, setHistory] = useState([])
const [sort, setSort] = useState('')
useEffect(() => {
 axios.get(`${process.env.REACT_APP_BACKEND_API}/orders/` +cashier.iduser)
 .then((result)=>{
   const resultData = result.data.data
   setHistory(resultData)
 })
 .catch((err)=>{
   console.log(err);
 })
}, [])
const handleSort = async(e) =>{
  setSort(e.target.value)
  const {data} = await axios.get(`${process.env.REACT_APP_BACKEND_API}/orders?${e.target.value}`)
  setHistory(data.data);
}
  return (
    <Styles>
      <Navbar NavbarSize="nav" sidebarSize="sidebar" history title="History" home="/"/>
      <div className="wrapper">

        <div className="card-wrapper">
        <SmallCards color="pink" pinkbubble className="pink-card"/>
        <SmallCards color="blue blue-card" bluebubble/>
        <SmallCards color="violet violet-card" violetbubble/>
        </div>
        <BasicCard className="card">
            <LineChart/>
        </BasicCard>
        <BasicCard className="card-table">
          <div className="title-wrap">
          <h2>Recent Order</h2>
          <div className="select" tabIndex="1">
                <select className="form-select selectopt" onChange={(e) => handleSort(e)}>
                      <option  ption selected disabled >filter</option>
                      <option value="sortBy=foodName&sort=DESC">Newest</option>
                      <option value="sortBy=foodName&sort=ASC">Latest</option>
                    </select>         
            </div>

          </div>
            <Table responsive="xl" centered>
                <thead>
                    <th>Invoice</th>
                    <th>Cashier</th>
                    <th>Date</th>
                    <th>Orders</th>
                    <th>Amount</th>
                </thead>
                <tbody>
                {history.map((item, index) => 
                  <tr>
                    <td>{item.invoice}</td>
                    <td>{item.name}</td>
                    <td>{item.date}</td>
                    <td>{item.foodName}</td>
                    <td>{item.totalprice}</td>             
                  </tr>               
                  )}
                </tbody>
            </Table>
        </BasicCard>
      </div>

    </Styles>
  );
};

export default History;
const Styles = styled.div`
  .nav {
    width: 100%;
    height: 100px;
  }
  .sidebar {
    top: 100px;
  }
  .wrapper{
      margin-left: 150px;
      margin-right: 35px;
      margin-top: 24px;
      .card-wrapper{
          display: flex;
          flex-direction: row;
          margin-bottom: 64px;
          @media screen and (min-width: 992px) {
            flex-direction: row;
            }
            @media screen and (min-width: 1280px) {
              flex-direction: row;
            }
          .pink-card{
            width: 402px;
          }
          .blue-card{
              margin-left: 23px;
               width: 402px;
          }
          .violet-card{
            margin-left: 23px;
            width: 402px;
          }
      }
      .card{
        width: 99%;
        height: 100%; 
        margin-bottom : 50px;
      }
      .card-table{
        width: 99%;
        /* height: 230px;  */
        padding: 40px;
        margin-bottom : 50px;
        .title-wrap{
          display: flex;
            .select{
              margin-left: auto;
              .selectopt{
                background: #CECECE;
                border-radius: 10px;
              }
            }
        }
        h2{
          margin-bottom: 25px;
        }
      }
  }
`;

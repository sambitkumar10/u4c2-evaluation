import React, { useEffect, useState } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import Pagination from "./Pagination";
import { Flex,Grid} from '@chakra-ui/react'
import axios from "axios";
const Products = () => {
  const [carddata,setCarddata] = useState([]) 
  const [page,setPage] = useState(1)
  const [limit,setLimit] = useState(3)
const [formData,setFormData] = useState([])

  useEffect(()=>{
  const GetData = async ()=>{
    let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=${limit}`)
   setCarddata(r.data)
  }
  GetData()
},[page,limit])

const postData = async () => {
 
  let res = await fetch("http://localhost:8080/products", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(formData),
  });

  let data = await res.json();
  setFormData(data);
};
 

  return (
    <Flex style={{flexDirection:"column",width:"70%",justifyContent:"center",margin:"auto"}}>
      <AddProduct postData={postData} />
      
      <Grid><div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>{carddata.map((item)=>{
        return <Product key={item.id} item={item}/>
      })}</div> </Grid>
      <Pagination page={page} setPage={setPage} limit={limit} setLimit={setLimit}/> 
    </Flex>
    
  );
};

export default Products;

import React, { useEffect, useState } from "react";
import axios from "axios";


const App = () => {
  
  const [page, setPage] = useState(1)
  const [total,setTotal]=useState(0)
  const [products,setProducts]=useState([])
  useEffect(() => {
    const getProducts = async () => {
      let r = await axios.get(`http://localhost:8080/products?_page=${page}&_limit=5`)
      setProducts(r.data)
      setTotal(Number(r.headers["x-total-count"]))
     
    }
    
    getProducts()
    
  },[page])
    
  
  return <div className="App">
   
    {products.map(product => (
      <div key={product.id}>product:-{product.id} <br></br> title:-{product.title} "<br></br> image:":-{product.imageSrc} <br></br> price:-{product.price}
        <img src="https://picsum.photos/seed/picsum6/420/260"/>
      </div>
    
    ))}

  
    <button disabled={page <= 1} onClick={() => {
      if (page > 1) {
        setPage(page - 1)
      }
    }}
    >
      
      {"PREVIOUS"}</button>
      
    
     <button disabled={total<page*5} onClick={() => setPage(page +1)}>{"NEXT"}</button>
    
  </div>;
}
export default App;

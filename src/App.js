import React  , {useState} from 'react'
import "./App.css";
import Filter from './components/Filter/Filter';
import Products from './components/Products/Products';
import product from "./data.json";
function App() {

    const [data , setData] = useState(product.products);
    const [size , setSize] = useState("");
    const [sort , setSort] = useState("");

 const filterProducts = (e) => {
        if(e.target.value === ""){
          setSize(e.target.value);
          setData(product.products);
        }
        else{
          setSize(e.target.value)
          const filteredData = product.products.filter(product => product.availableSizes.indexOf(e.target.value) >= 0);
          setData(filteredData);
        }

 }
 const sortProducts = (e) => {

        setSort(e.target.value);
        // eslint-disable-next-line array-callback-return
        setData(data.slice().sort( (a , b) => sort === "lowest" ? a.price < b.price ? 1 : -1 
        : 
        sort === "highest" ? a.price > b.price ? 1 : -1
        :
         a.id > b.id ? -1 : 1

        ))
 }
  return (
    <div className="grid-container">
        <header>
          <a href="/">React Shopping Cart</a>
        </header>
        <main>
         <div className="content">

           <div className="main">
             <Filter count={data.length}
               size={size}
                sort={sort}
               filterProducts = {filterProducts}
               sortProducts={sortProducts}
                />
              <Products data={data}   size={size}/>
           </div>
          <div className="sidebar">
               Cart Item
          </div>

         </div>
        </main>
        <footer>
          All right is reserved
        </footer>
    </div>
  )
}

export default App



 import React from 'react'
import formatCurrency from '../../util';
 import "./Products.css";
 import Fade from "react-reveal/Fade";
 function Products({data}) {
     return (
         <div >
             <Fade bottom cascade={true}>
             <ul className="products">
                {
                     data.length < 1 ? <h1>No Products Found For The Filter</h1> :   data.map(product => <li key={product.id}>
                        <div className="product">
                            <a href="/">
                                <img src={product.image} alt="Some desc" />
                                <p>
                                    {
                                        product.title
                                    }
                                </p>

                            </a>
                            <div className="product-price">
                                <div>
                                    {formatCurrency(product.price)}
                                </div>
                                <button className="button primary">Add To Cart</button>
                            </div>
                        </div>
                  </li>)                  
                }
             </ul>
             </Fade>
         </div>
     )
 }
 
 export default Products
 
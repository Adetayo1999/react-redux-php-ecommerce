

import React , {useEffect} from 'react';
import "./Header.css";

const Header = () => {

   useEffect(() => {
       const header = document.querySelector('.header');
       window.addEventListener('scroll' , () => {
           if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ){
                 header.classList.add('active');
           }else{
            header.classList.remove('active')

           }


           return () => {
               window.removeEventListener('scroll')
           }
       })
   },[])

    return (
        <div className ="header">
            <div className="container">
                <div className="header__left">
                    <a href="#"><h1>ProductName</h1></a>
                    <nav>
                        <ul>
                            <li>
                               <a href="#">Shop</a>
                            </li>
                            <li>
                               <a href="#">About</a>
                            </li>
                            <li>
                               <a href="#">Contact</a>
                            </li>
                            <li>
                               <a href="#">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="header__right">
                   <a href="#"> <h4>Admin Profile</h4></a>
                   <a href="#"> <span>Cart</span> <i class="fas fa-cart-plus"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Header

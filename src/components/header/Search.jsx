import React from "react"
import logo from "./logoSHOP.png"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // Header Fixed.
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <button>
            <a href="."><img src={logo} alt='' /></a>
            </button>
          </div>

          <label>Register</label>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search Item' />
            <i class='fa fa-close'></i>
          </div>

          <label>Category</label>

          <div className='icon f_flex width'>            
          <i class='fa fa-sign-in icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
            <i className='fa fa-user icon-circle'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search

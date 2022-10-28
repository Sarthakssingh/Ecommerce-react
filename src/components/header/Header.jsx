import React from "react"
import "./Header.css"
import Search from "./Search"
import Categories from "./Categories"

const Header = ({ CartItem }) => {
  return (
    <>
      <Search CartItem={CartItem} />
      <Categories/>
    </>
  )
}

export default Header

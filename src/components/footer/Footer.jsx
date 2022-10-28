import React from "react"
import "./style.css"

const Footer = () => {
  return (
    <>
      <footer>
      <section className='footer'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +91123 1234 1234</label>
            <i className='fa fa-envelope'></i>
            <label>shopdigi@spdi.com</label>
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <label>Copyright &copy; 2022</label>
          </div>
        </div>
      </section>
      </footer>
    </>
  )
}

export default Footer

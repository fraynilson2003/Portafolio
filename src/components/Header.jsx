import React from 'react';
import logo from "../assets/logo.svg"

const Header = () =>{

  return(
    <div className="py-8">
      <div className="container mx-auto">
        <div className="flex  justify-between items-center ">
          <a href="#">
            {/*logo */}
            <img src={logo} alt="" />
          </a>
          {/*Button */}
          <button className="btn btn-ms p-3">Trabaja conmigo</button>
        </div>
      </div>
    </div>
  )
}
export default Header;

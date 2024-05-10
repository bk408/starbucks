

import React, { useState } from 'react'

const Box = () => {
    const [isShow, setIsShow] = useState(false)

    const handleBtn = () => {

        setIsShow(!isShow)
    }
  return (
    <div className="block-cont">
      <div>
        <div onClick={handleBtn} className={isShow ? "dark" : "light"}>Block 
         
        </div>
        <div onClick={handleBtn}  className="block">
          Block 2
        </div>
        <div onClick={handleBtn} className="block">
          Block 3
        </div>
        <div onClick={handleBtn} className="block">
          Block 4
        </div>
      </div>
    </div>
  );
}


export default Box
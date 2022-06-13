import React from "react"
import '../App.css';

const Contact = (props) => {
    return (
        <>
        <h1 className='title' style={{
            fontSize: props.titleFontSize
          }}>Contact us</h1>    
          <h2 style={{ fontSize: props.subtitleFontSize }}>
          lifeonmars2022@gmail.com
          </h2>
        </>
          )
}

export default Contact;
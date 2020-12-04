import React from 'react'
import './footer.scss'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <p className="logo">LOGO</p>
                </div>
                <div className="list-wrapper">
                    <p className="icon-wrapper">List</p>
                    <p className="icon-wrapper">List</p>
                    <p className="icon-wrapper">List</p>
                    <p className="icon-wrapper">List</p>
                    <p className="icon-wrapper">List</p>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright</p>
            </div>
        </div>
    )
}

export default Footer

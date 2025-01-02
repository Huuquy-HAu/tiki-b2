import React from 'react';
import './Style_Header.css'
import { Link, useNavigate } from 'react-router-dom'

function OrderHeader() {
    return (
        <div>
            <header className="iBrUcv">
                <div className="hfMLFx header-container">
                    <div className="logo"><a>
                    <Link to='/'> 
                    <picture className="webpimg-container">
                        
                            {/* <source type="image/webp"
                                srcSet="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png" /> */}
                            <img src="https://salt.tikicdn.com/ts/upload/1c/11/e6/d8211526b5bdc67aaaef2af9e8cf7dc8.png"
                                alt="icon" width="60" height="40" className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo" />
                        </picture></Link>
                        
                    </a><span className="divider"></span><span className="title">Thanh toán</span>
                    
                    </div>
                    <div className="hotline"><a href="tel:1900-6035">
                        <picture className="webpimg-container">
                            <source type="image/webp"
                                srcSet="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png" />
                            <img src="https://salt.tikicdn.com/ts/upload/ae/b1/ea/65e64a529e4ff888c875129d3b11ff29.png"
                                alt="hotline" width="185" height="56" className="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo" />
                        </picture>
                    </a></div>
                </div>
            </header>
        </div>
    );
}

export default OrderHeader;
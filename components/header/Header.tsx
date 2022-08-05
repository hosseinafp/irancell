import React from 'react';
import Menu from './Menu';
import SmallBox from './SmallBox';

const Header = () => {
    return (
        <div className='row header d-flex' dir='rtl'>
            <div className="col-12 order-1 order-lg-0 col-lg-10 menu  pe-5">
                <Menu/>
            </div>
            <div className="col-12 col-lg-2 order-0 order-lg-1 py-2">
                <SmallBox/>
            </div>
        </div>
    );
};

export default Header;
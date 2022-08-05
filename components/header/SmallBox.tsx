import React from 'react';

const SmallBox = () => {
    return (
        <div className='row px-0 justify-content-between justify-content-lg-center px-3'>
            <div className="SmallBox px-0 col-5 col-lg-12 row">
                <i className="col-1 bi bi-people-fill px-0" style={{width: 'max-content!important'}}></i>
                <div className="col-5 pe-1 ps-0 isness" style={{width: 'max-content!important'}}>مشترکین سازمانی</div>
            </div>
            <div className="row menuItems col-6 col-lg-12 mx-md-3 pt-lg-3 justify-content-end ms-lg-5">
                <div className="col-1 SmallBox align-self-center ps-0 pe-3 text-start"
                 style={{width: 'fit-content!important'}}>
                    <i className="bi bi-cart-fill" style={{width: 'fit-content!important'}}></i>
                </div>
                <div className="col-4 col-sm-2 col-md-4 SmallBox align-self-center px-0 text-center">
                    <i className="bi fw-bold col-1 align-self-center bi-chevron-down" style={{width: 'fit-content!important'}}></i>
                    <i className="bi bi-person-fill"></i>
                </div>
                <div className="col-4 SmallBox align-self-center">
                    <div className="row">
                        <div className="col-10">
                            <div className="row justify-content-start">
                                <i  className="col-1 px-1 bi bi-globe" style={{width: 'fit-content!important'}}></i>
                                <div  className='col-1 px-0 pe-0' style={{width: 'fit-content!important'}}>EN</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBox;
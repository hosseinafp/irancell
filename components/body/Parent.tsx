import React from 'react';
import Finaly from './Finaly'
import Text from './finaly/Text';
import SelectCount from './SelectCount';
const Parent = () => {
    return (
        <div className="row justify-content-center pt-5 ">
            <div className='col-11 col-md-9'>
                <div className="row shadow rounded bg-white py-2 d-flex">
                    <div className="col-12 order-1 order-lg-0 mb-3 d-none d-lg-block col-lg-5"><Finaly/><Text/></div>
                    <div className="col-12 order-0 order-lg-1 mb-3 col-lg-7"><SelectCount/></div>
                </div>
            </div>
        </div>
    );
};

export default Parent;
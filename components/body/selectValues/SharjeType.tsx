import React, { useState } from 'react';

import {useAtom} from 'jotai';
import {finaly,phoneNumber,simType,checkedSharje} from '../../../jotai/Jotai';

const SharjeType = () => {
    const [checked,setChecked] =useAtom(checkedSharje)
    const [type,setType] = useAtom(simType)

    const checkHandler = (e:any) => {
        setChecked(!checked);
        setType(e.target.innerHTML)
    }
    return (
        <div className="row justify-content-center">
            <div className="col-6">
        <div className="row justify-content-center text-center mt-4">
            <div className="text-muted mb-2">نوع سیم‌کارت</div>
            <div className='rounded-pill px-0 border justify-content-center row'>
                <div onClick={(e)=>checkHandler(e)} className={`ps-0 pointer col-6 ${checked && 'selectedSharjeType'} rounded-pill`}>دائمی</div>
                <div onClick={(e)=>checkHandler(e)} className={`ps-0 pointer col-6 ${!checked && 'selectedSharjeType'} rounded-pill`}>اعتباری</div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default SharjeType;
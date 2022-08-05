import React from 'react';

import {useAtom} from 'jotai';
import {checkedSharje,sharjeType,amazingSharje} from '../../../jotai/Jotai';
import handler from '../../../pages/api/hello';
const Checkbox = () => {
    const [checked,setChecked] =useAtom(checkedSharje)
    const [amazing,setAmazing] =useAtom(amazingSharje)
    const [sharje,setSharje] =useAtom(sharjeType)
    const handler = ()=>{
        setAmazing(!amazing);
        if (sharje=='عادی') {   
            setSharje('شگفت انگیز');
        }else{
            setSharje('عادی');
        }
    }
    return (
        <div className="row justify-content-center mt-3">
            <label className="col-5 text-end " htmlFor="flexSwitchCheckDefault">شارژ شگفت انگیز</label>
            <div className="form-check form-switch col-2">
                <input className="form-check-input finaly shadow-0" onClick={()=>handler()} disabled={checked && 'disabled'} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
        </div>
    );
};

export default Checkbox;
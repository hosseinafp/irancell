import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import {useAtom} from 'jotai';
import {checkedSharje,sharjeType,amazingSharje,nums} from '../../../jotai/Jotai';
import handler from '../../../pages/api/hello';
const Checkbox = () => {
    const {t, i18n} = useTranslation(['translation']);

    const [checked,setChecked] =useAtom(checkedSharje)
    const [amazing,setAmazing] =useAtom(amazingSharje)
    const [sharje,setSharje] =useAtom(sharjeType)
    const [price,setPrice] =useAtom(nums)
    const [value,setValue] = useState({value:50000, label:'50000'});

    const handler = ()=>{
        setAmazing(!amazing);
        setPrice({...price,price:value.value})
        if (sharje=='عادی') {   
            setSharje('شگفت انگیز');
        }else{
            setSharje('عادی');
        }
    }
    return (
        <div className="row justify-content-center mt-3">
            <label className="col-6 col-lg-5 text-end " htmlFor="flexSwitchCheckDefault">{t('amazing sharje')}</label>
            <div className="form-check form-switch col-2">
                <input className="form-check-input finaly shadow-none" onClick={()=>handler()} disabled={checked && 'disabled'} type="checkbox" id="flexSwitchCheckDefault"/>
            </div>
        </div>
    );
};

export default Checkbox;
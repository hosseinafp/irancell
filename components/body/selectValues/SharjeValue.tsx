import React, {useEffect, useState} from 'react';
import Input from './Input';
import {useAtom} from 'jotai';
import {amazingSharje,nums} from '../../../jotai/Jotai';
import { useTranslation } from 'react-i18next';
import {numberToPersian} from '../enToPe'
const SharjeValue = () => {
    const [amazing,setAmazing] =useAtom(amazingSharje)
    const [price,setPrice] =useAtom(nums)
    const {t, i18n} = useTranslation(['translation']);



    const data:any[] = [
        {value:10000, label:'10000'},
        {value:20000, label:'20000'},
        {value:50000, label:'50000'},
        {value:100000, label:'100000'},
        {value:200000, label:'200000'},
        {value:0, label:'سایر مبالغ'},
    ];
    const [value,setValue] = useState({value:10000, label:'10000'});
    const [otherPrice,setOtherPrice] = useState(0);
    const changeHandler= (e:any) => {
        setValue({value:e.value, label:e.label,});
        if (e.label === 'سایر مبالغ') {
            setOtherPrice(1)
        }else{
            setPrice({...price,price:e.value})
            setOtherPrice(0)
        }
        
    }
    useEffect(()=>{
        setValue({value:50000, label:'50000'})
    },[amazing])
    return (
        <>
        <div dir='rtl' className='row justify-content-center'>
            <div className="col-10 col-ms-8 col-lg-11">
                <div className="text-muted finalyItems gray mb-2 me-5">{t('sharje price')}</div>
                    <div className="row justify-content-center">
                        {data.map((item,index)=>(
                            <button disabled={amazing && index < 2 && 'disabled'} onClick={()=>changeHandler(item)} className={`${value.label == item.label ? 'bgYellow':''} border-0 col-3 py-1 pointer finalyItems rounded-pill finaly px-0 m-1`} 
                            // style={{width:'max-content!important'}}
                             key={index}>
                            {item.label !== 'سایر مبالغ' && t('ltr') =='rtl' ?  numberToPersian(item.label) + 'ریال': 
                             item.label !== 'سایر مبالغ' && t('ltr') !=='rtl' ? item.label+'IRR' : 
                             item.label == 'سایر مبالغ'&& t('ltr') =='rtl' ? 'سایر مبالغ' :
                             item.label == 'سایر مبالغ'&& t('ltr') =='ltr' ? 'other' :
                             ''}
                            </button>
                            ))}
                    </div>
            </div>
        </div>
                    {otherPrice ==1 ? 
                    <Input type={'price'} name={t('price')} />
                     :''}
                            </>
    );
};

export default SharjeValue;
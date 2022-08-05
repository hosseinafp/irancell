import React, {useState} from 'react';
import Input from './Input';
import {useAtom} from 'jotai';
import {amazingSharje,nums} from '../../../jotai/Jotai';

const SharjeValue = () => {
    const [amazing,setAmazing] =useAtom(amazingSharje)
    const [price,setPrice] =useAtom(nums)

    const data = [
        { value:'۱۰,۰۰۰ریال'},
        { value:'۲۰,۰۰۰ریال'},
        { value:'۵۰,۰۰۰ریال'},
        { value:'۱۰۰,۰۰۰ریال'},
        { value:'۲۰۰,۰۰۰ریال'},
        { value:'سایر مبالغ'},
    ];
    const [value,setValue] = useState('۱۰,۰۰۰ریال');
    const [otherPrice,setOtherPrice] = useState(0);
    const changeHandler= (e:any) => {
        setValue(e);
        if (e == 'سایر مبالغ') {
            setOtherPrice(1)
        }else{
            setPrice({...price,price:e})
            setOtherPrice(0)
        }
        
    }
    return (
        <>
        <div dir='rtl' className='row justify-content-center'>
            <div className="col-10 col-ms-8 col-lg-11">
                <div className="text-muted menuItems me-5">مبلغ شارژ</div>
                    <div className="row justify-content-center">
                        {data.map((item,index)=>(
                            <button disabled={amazing && index < 2 && 'disabled'} onClick={()=>changeHandler(item.value)} className={`${value == item.value ? 'bgYellow':''} border-0 col-3 py-1 pointer menuItems rounded-pill finaly m-1`} 
                            // style={{width:'max-content!important'}}
                             key={index}>
                                {item.value}
                            </button>
                            ))}
                    </div>
            </div>
        </div>
                    {otherPrice ==1 ? 
                    <Input type={'price'} name='مبلغ' />
                     :''}
                            </>
    );
};

export default SharjeValue;
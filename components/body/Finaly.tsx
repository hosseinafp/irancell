import React from 'react';
import {useAtom} from 'jotai';
import {finaly,nums,simType,sharjeType} from '../../jotai/Jotai';
const Finaly = () => {
    const [data,setData] = useAtom(finaly)
    const [number,setNumber] = useAtom(nums)
    const [type,setType] = useAtom(simType)
    const [sharje,setSharje] =useAtom(sharjeType)

    return (
        <div className="finaly py-2 px-2 rounded mb-2">
            <div className="text-center bg-white rounded py-2 px-2 mb-4"> 
                فاکتور نهایی
            </div>
            <div className="finalyItems pe-4" dir='rtl'>
                {/* {data.map((item,index)=>(
                    <div key={index} className="py-2">
                    <div className="text-muted" >{item.title} {item.greenCircle ? <i className="fs green bi bi-circle-fill"></i>:''}</div>
                    <div className="fw-bold">{item.value}</div>
                    </div>
                ))} */}
                <div className="py-2">
                    <div className="text-muted" >نوع سیم‌کارت</div>
                    <div className="fw-bold">{type}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >مستقیم به شماره</div>
                    <div className="fw-bold">{number.number}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)</div>
                    <div className="fw-bold">{number.price}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >پاداش خرید</div>
                    <div className="fw-bold">{sharje}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >نوع شارژ</div>
                    <div className="fw-bold">{sharje}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >ایمیل</div>
                    <div className="fw-bold">{number.email}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >نام بانک</div>
                    <div className="fw-bold">---</div>
                </div>
            </div>
        </div>
    );
};

export default Finaly;
import React, { useEffect } from 'react';

import {useAtom} from 'jotai';
import {finaly,nums,simType,sharjeType} from '../../../jotai/Jotai';

const MobileDetails = () => {
    
    const [data,setData] = useAtom(finaly)
    const [number,setNumber] = useAtom(nums)
    const [type,setType] = useAtom(simType)
    const [sharje,setSharje] =useAtom(sharjeType)

    return (
        <div className="d-lg-none py-2 px-2 py-2 mx-4 row justify-content-center mb-2">
            <div className="mobDit finalyItems pe-4 col-9 rounded border" dir='rtl'>
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

export default MobileDetails;
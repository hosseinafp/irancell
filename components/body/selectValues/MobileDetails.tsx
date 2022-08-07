import React, { useEffect } from 'react';

import {useAtom} from 'jotai';
import {finaly,nums,simType,sharjeType} from '../../../jotai/Jotai';
import { useTranslation } from 'react-i18next';


const MobileDetails = () => {
    
    const [data,setData] = useAtom(finaly)
    const [number,setNumber] = useAtom(nums)
    const [type,setType] = useAtom(simType)
    const [sharje,setSharje] =useAtom(sharjeType)
    const {t, i18n} = useTranslation(['translation']);


    return (
        <div className="d-lg-none py-2 px-2 py-2 mx-4 row justify-content-center mb-2">
            <div className="mobDit finalyItems pe-4 col-9 rounded border" dir={t('ltr')}>
            <div className="py-2 row">
                    <div className="col text-muted" >{t('simCard type')}</div>
                    <div className="col fw-bold">{type}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('phone Number')}</div>
                    <div className="col fw-bold">{number.number}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('Charge amount (Including VAT)')}</div>
                    <div className="col fw-bold">{number.price}{t('IRR')}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('Cashback Reward ')}</div>
                    <div className="col fw-bold">{number.price/10}{t('IRR')}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('sharje Type')}</div>
                    <div className="col fw-bold">{sharje}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('email(optional)')}</div>
                    <div className="col fw-bold">{number.email}</div>
                </div>
                <div className="py-2 row">
                    <div className="col text-muted" >{t('bank name')}</div>
                    <div className="col fw-bold">---</div>
                </div>
            </div>
        </div>
    );
};

export default MobileDetails;
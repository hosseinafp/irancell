import React from 'react';
import {useAtom} from 'jotai';
import {finaly,nums,simType,sharjeType} from '../../jotai/Jotai';
import { useTranslation } from 'react-i18next';
import {numberToPersian} from './enToPe'

const Finaly = () => {
    const [data,setData] = useAtom(finaly)
    const [number,setNumber] = useAtom(nums)
    const [type,setType] = useAtom(simType)
    const [sharje,setSharje] =useAtom(sharjeType)
    const {t, i18n} = useTranslation(['translation']);
    let dir = t('ltr')
    return (
        <div className="finaly py-2 px-2 rounded mb-2">
            <div className="text-center bg-white rounded py-2 px-2 mb-4"> 
                {t('Final invoice')}
            </div>
            <div className="finalyItems pe-4" dir={dir}>
                {/* {data.map((item,index)=>(
                    <div key={index} className="py-2">
                    <div className="text-muted" >{item.title} {item.greenCircle ? <i className="fs green bi bi-circle-fill"></i>:''}</div>
                    <div className="fw-bold">{item.value}</div>
                    </div>
                ))} */}
                <div className="py-2">
                    <div className="text-muted" >{t('simCard type')}</div>
                    <div className="fw-bold">{type}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('phone Number')}</div>
                    <div className="fw-bold">{number.number}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('Charge amount (Including VAT)')}</div>
                    <div className="fw-bold">{t('ltr') == 'rtl'? numberToPersian(number.price):number.price}{t('IRR')}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('Cashback Reward ')}</div>
                    <div className="fw-bold">{t('ltr') == 'rtl'? numberToPersian(number.price/10):number.price/10}{t('IRR')}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('sharje Type')}</div>
                    <div className="fw-bold">{dir == 'ltr' && sharje !== 'عادی' ? t('normal'):
                                              dir == 'ltr' && sharje == 'عادی' ? t('amazing') :
                                              dir == 'rtl' && sharje == 'عادی' ? 'عادی' :
                                              dir == 'rtl' && sharje !== 'عادی' ? 'شگفت انگیز' :''
                                            }
                                              </div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('email(optional)')}</div>
                    <div className="fw-bold">{number.email}</div>
                </div>
                <div className="py-2">
                    <div className="text-muted" >{t('bank name')}</div>
                    <div className="fw-bold">---</div>
                </div>
            </div>
        </div>
    );
};

export default Finaly;
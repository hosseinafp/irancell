import React, { useState } from 'react';
import { HiShoppingCart } from 'react-icons/hi';
import { useTranslation } from "react-i18next";
import {useAtom} from 'jotai';
import {sharjeType,simType} from '../../jotai/Jotai';
const SmallBox = () => {
    const { t, i18n } = useTranslation();
    const [ language,setLanguage] = useState('fa_IR')
    const [boolLang,setBoolLang] = useState(0)
    const [sharje,setSharje] =useAtom(sharjeType)
    const [type,setType] = useAtom(simType)


    const lang = () => {
        if (boolLang == 1) {
            i18n.changeLanguage(language);
            setLanguage('fa_IR')
            setBoolLang(0)
            if (sharje == 'شگفت انگیز') {   
                setSharje('amazing')
            }else{
                setSharje('normal')
            }
            setType('credit')
        }else{
            i18n.changeLanguage(language);
            setBoolLang(1)
            setSharje('شگفت انگیز')
            setType('اعتباری')
            setLanguage('en_US')
        }
    }
    return (
        <div className='row px-0 justify-content-between justify-content-lg-center px-3'>
            <div className="SmallBox px-0 pe-3 mt-1 pe-lg-0 justify-content-lg-center col-6 col-lg-12 row pointer" title="مشترکین سازمانی">
                <i className="col-1 bi bi-people-fill px-0" style={{width: 'max-content!important'}}></i>
                <div className="col-5 pe-1 ps-0 " style={{width: 'max-content!important'}}>{t('Business')}</div>
            </div>
            <div className="row menuItems col-6 pe-1 col-lg-12 pt-lg-2 justify-content-lg-center justify-content-end mx-lg-1">
                <div className="col-1 SmallBox align-self-center ps-0 pe-0 text-center pointer"
                 style={{width: 'fit-content!important'}}>
                    <HiShoppingCart className='fs-4' title='سبد خرید' />
                </div>
                <div className="col-3 col-sm-2 col-md-4 SmallBox align-self-center px-2 text-center pointer" style={{width: 'fit-content!important'}} title='ورود کاربر'>
                    <i className="bi fw-bold col-1 align-self-center bi-chevron-down" style={{width: 'fit-content!important'}}></i>
                    <i className="bi fs-5 bi-person-fill"></i>
                </div>
                <div className="col-4 SmallBox align-self-center pointer" style={{width: 'fit-content!important'}} title='زبان'>
                            <div className="row justify-content-center" onClick={()=>lang()} >
                                <i  className="col-lg-4 pe-0 ps-1 text-center align-self-center bi bi-globe fs-6" style={{width: 'fit-content!important'}}></i>
                                <div  className='col-lg-4 px-0 align-self-center pe-0 ' style={{width: 'fit-content!important'}}>{t('FA')}</div>
                            </div>
                </div>
            </div>
        </div>
    );
};

export default SmallBox;
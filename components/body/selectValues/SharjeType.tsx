import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {useAtom} from 'jotai';
import {simType,checkedSharje} from '../../../jotai/Jotai';

const SharjeType = () => {
    const [checked,setChecked] =useAtom(checkedSharje)
    const [type,setType] = useAtom(simType)
    const {t, i18n} = useTranslation(['translation']);


    const checkHandler = (e:any) => {
        setChecked(!checked);
        setType(e.target.innerHTML)
    }
    return (
        <div className="row justify-content-center">
            <div className="col-6">
        <div className="row justify-content-center text-center mt-4">
            <div className="text-muted mb-2">{t('simCard type')}</div>
            <div className='rounded-pill px-0 border justify-content-center row '>
                <div onClick={(e)=>checkHandler(e)} className={`ps-0 pointer py-1 col-6 ${checked && 'selectedSharjeType'} rounded-pill`}>{t('permanent')}</div>
                <div onClick={(e)=>checkHandler(e)} className={`ps-0 pointer py-1 col-6 ${!checked && 'selectedSharjeType'} rounded-pill`}>{t('credit')}</div>
            </div>
        </div>
            </div>
        </div>
    );
};

export default SharjeType;
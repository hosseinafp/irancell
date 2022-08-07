import React from 'react';
import Text from './finaly/Text';
import Checkbox from './selectValues/Checkbox';
import Input from './selectValues/Input';
import MobileDetails from './selectValues/MobileDetails';
import SharjeType from './selectValues/SharjeType';
import SharjeValue from './selectValues/SharjeValue';
import SubmitBtn from './selectValues/SubmitBtn';
import { useTranslation } from 'react-i18next';

import {useAtom} from 'jotai';
import {finaly} from '../../jotai/Jotai';
const SelectCount = () => {
    const {t, i18n} = useTranslation(['translation']);

    const [values,setValues] = useAtom(finaly)
    console.log(values);

    return (
        <div className='row justify-content-center'>
            <div className="row justify-content-center fw-bold">{t('irancell E-charje')}</div>
            <SharjeType/>
            <Checkbox/>
            <Input type={'number'} name={t('phone number')}/>
            <SharjeValue/>
            <Input type={'email'} name={t('email(optional)')}/>
            <MobileDetails/>
            <div className='d-lg-none mb-4'>
                <Text/>
            </div>
            <SubmitBtn/>
        </div>
    );
};

export default SelectCount;
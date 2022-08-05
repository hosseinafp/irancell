import React from 'react';
import Text from './finaly/Text';
import Checkbox from './selectValues/Checkbox';
import Input from './selectValues/Input';
import MobileDetails from './selectValues/MobileDetails';
import SharjeType from './selectValues/SharjeType';
import SharjeValue from './selectValues/SharjeValue';
import SubmitBtn from './selectValues/SubmitBtn';

import {useAtom} from 'jotai';
import {finaly} from '../../jotai/Jotai';
const SelectCount = () => {
    const [values,setValues] = useAtom(finaly)
    console.log(values);

    return (
        <div className='row justify-content-center'>
            <div className="row justify-content-center">خرید آنلاین شارژ ایرانسل</div>
            <SharjeType/>
            <Checkbox/>
            <Input type={'number'} name='شماره تلفن همراه'/>
            <SharjeValue/>
            <Input type={'email'} name='ایمیل(اختیاری)'/>
            <MobileDetails/>
            <div className='d-lg-none mb-4'>
                <Text/>
            </div>
            <SubmitBtn/>
        </div>
    );
};

export default SelectCount;
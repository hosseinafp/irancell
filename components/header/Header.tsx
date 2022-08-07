import React from 'react';
import Menu from './Menu';
import SmallBox from './SmallBox';
import { useTranslation } from 'react-i18next';


const Header = () => {
    const {t, i18n} = useTranslation(['translation']);
    let dir = t('ltr')
    return (
        <div className='row header d-flex' dir='rtl'>
            <div className={`col-12 ${dir == 'rtl'? 'order-lg-0 menu':'order-lg-1 menu2'} align-self-center col-lg-10`}>
                <Menu/>
            </div>
            <div className={`col-12 align-self-center col-lg-2 ${dir == 'rtl'? 'order-lg-1':'order-lg-0'}  py-2`}>
                <SmallBox/>
            </div>
        </div>
    );
};

export default Header;
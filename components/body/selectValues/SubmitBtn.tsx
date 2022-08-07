import React from 'react';
import { useTranslation } from 'react-i18next';

const SubmitBtn = () => {
    const {t, i18n} = useTranslation(['translation']);
    // i18n.changeLanguage('fa_IR');


    return (
            <div className="row justify-content-center">
                <div className="btn col-8 rounded-pill py-2 text-center pointer bgYellow">{t('select bank and pay')}</div>
            </div>
    );
};

export default SubmitBtn;
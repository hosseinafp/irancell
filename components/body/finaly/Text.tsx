import React from 'react';
import { useTranslation } from 'react-i18next';

const Text = () => {
    const {t, i18n} = useTranslation(['translation']);
    return (
        <div className="finalyItems text-muted" dir={t('ltr')}><i className="green bi bi-circle-fill"></i> 
            &nbsp; {t('An additional 1% of the amount that you pay (excl. VAT) will be deposited in your Jibjet account as a free cashback reward. Your Jibjet can be accessed through the MyIrancell Superapp.')}
        </div>
    );
};

export default Text;
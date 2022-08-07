import React, { useState } from 'react';
import logo from 'mtn.svg'
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MobMenu from './MobMenu';

const Menu = () => {
    const {t, i18n} = useTranslation(['translation']);
    const [isShown, setIsShown] = useState(false);
    const [isShownSlide, setIsShownSlide] = useState(false);

    let dir = t('ltr')
    let data = [
        {haveSub:true,name: t('shop')},
        {haveSub:true,name: t('Products and Services')},
        {haveSub:true,name: t('Festivals')},
        {haveSub:true,name: t('Customer Support')},
        {haveSub:true,name: t('Join Us')},
        {haveSub:false,name: t('Blog')},
        {haveSub:false,name: t('News')},
        {haveSub:false,name: t(' ')},
    ]
    if (dir == 'ltr') {
        data = data.reverse();
    }
    return (<>
        <div className={`row align-self-center d-flex ${dir == 'rtl'?"":"justify-content-end ps-3"}`}>
            <div className={`col-2 col-lg-1 ${dir == 'rtl'? 'order-1 order-lg-0 menu':'order-0 order-lg-1 '} order-1 order-lg-0 px-0 me-3`}>
                <Image src='/mtn.svg' width="900" className="px-0 align-self-center" height="900" layout='responsive' />
            </div>
                {data.map((item,index) =>(
                    <div dir={dir} className="fw-bolsd d-none d-lg-flex align-self-center menuItems" key={index} style={{width: 'max-content!important'}}>
                            {item.name}
                            {item.haveSub &&
                                <i onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} className="position-relative ps-1 bi fw-bolder col-1 align-self-center bi-chevron-down"style={{width: 'fit-content!important'}}>
                                        {/* {isShown &&
                                      <span className="position-absolute bottom-0 start-100 p-2">
                                        test
                                        <span className="visually-hidden"></span>
                                    </span>
                                        } */}
                                </i>
                            }
                            {/* <div>test</div> */}
                        </div>
                ))}
            <i className="col-9 d-lg-none align-self-center fs-1 bi bi-list" onClick={()=>setIsShownSlide(!isShownSlide)}></i>
            {/* {isShownSlide &&
                <MobMenu/>
            } */}
        </div>
        </>
    );
};

export default Menu;
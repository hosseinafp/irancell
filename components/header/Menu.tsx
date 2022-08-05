import React from 'react';
import logo from 'mtn.svg'
import Image from 'next/image';
const Menu = () => {
    const data = [
        {haveSub:true,name: 'فروشگاه'},
        {haveSub:true,name: 'محصولات و خدمات'},
        {haveSub:true,name: 'جشنواره ها'},
        {haveSub:true,name: 'پشتیبانی'},
        {haveSub:true,name: 'همکاری با ما'},
        {haveSub:false,name: 'وبلاگ'},
        {haveSub:false,name: 'اخبار'},
        {haveSub:false,name: 'ترابرد به ایرانسل'},
    ]
    return (<>
        <div className="row d-flex">
            <div className="col-2 col-lg-1 order-1 order-lg-0 px-0 ms-2">
                <Image src='/mtn.svg' width="900" className="px-0" height="900" layout='responsive' />
            </div>
                {data.map((item,index) =>(
                    <div className="fw-bold d-none d-lg-flex align-self-center menuItems" key={index} style={{width: 'max-content!important'}}>
                            {item.name}
                            {item.haveSub &&
                                <i className=" ps-1 bi fw-bold col-1 align-self-center bi-chevron-down"style={{width: 'fit-content!important'}}></i>
                            }
                        </div>
                ))}
            <i className="col-9 d-lg-none align-self-center fs-1 bi bi-list"></i>
        </div>
        </>
    );
};

export default Menu;
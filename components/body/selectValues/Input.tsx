import React, {useEffect, useState} from 'react';

import {useAtom} from 'jotai';
import {finaly,nums} from '../../../jotai/Jotai';

const Input = ({name,type}:any) => {
    const [values,setValues] = useAtom(nums)

    // const [data,setData] = useState({
    //     type:type,
    //     greenCircle:false,
    //     value: '',
    //     title: name})
    const changeHandler =(e:any) => {
        // setData({...data,value:e.target.value})
        setValues({...values,[e.target.name]:e.target.value})
    }
    const update = () => {
        // let allData = values;
        // const index = allData.findIndex(object => {
        //     return object.type === type;
        // });
        // allData.splice(index,1,data);
        // setValues(allData)
        // setValues([...values.filter(item => item.type !== type), data])
    }
    // useEffect(() => {
    //     console.log('values',values);
    //     update();
    // },[data])
    return (
        <div className="row justify-content-center mt-4">
            <div className="col-8 py-0 form-floating mb-3" dir='rtl'>
                <input type="email" className="finaly form-control my-0 form-control-sm rounded-pill" name={type} onChange={(e)=>changeHandler(e)} 
                // value={data.value}
                style={{height: 'calc(2.6rem + 2px)'}}
                 id="floatingInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput" style={{top: '-8px',transformOrigin: 'top right'}} className="my-0 pe-4 text-muted">{name}</label>
            </div>
        </div>
    );
};

export default Input;
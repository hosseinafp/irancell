import React, {useEffect, useState} from 'react';

import {useAtom} from 'jotai';
import {nums} from '../../../jotai/Jotai';

type Props={
    name: string;
    type: string;
}

const Input = ({name,type}:Props) => {
    const [values,setValues] = useAtom(nums)

    const changeHandler =(e:any) => {
        console.log(e)
        setValues({...values,[e.target.name]:e.target.value})
    }
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
import {atom} from 'jotai';

export const finaly = atom([
    {type:'type',value: 'اعتباری',greenCircle:false,title: 'نوع سیم‌کارت'},
    {type:'phoneNumber',value: '---',greenCircle:false,title: 'مستقیم به شماره'},
    {type:'price',value: '۲۱,۸۰۰ریال',greenCircle:false,title: 'مبلغ شارژ (با احتساب مالیات بر ارزش افزوده)'},
    {type:'',value: '۲۰۰ریال',greenCircle:true,title: 'پاداش خرید'},
    {type:'',value: 'معمولی',greenCircle:false,title: 'نوع شارژ'},
    {type:'email',value: '---',greenCircle:false,title: 'ایمیل'},
    {type:'',value: '---',greenCircle:false,title: 'نام بانک'},
]);
export const nums = atom({
    number:'---',
    email:'---',
    price:'۱۰,۰۰۰ریال',
});
export const simType = atom('اعتباری');
export const checkedSharje = atom(0);
export const amazingSharje = atom(0);
export const sharjeType = atom('عادی');


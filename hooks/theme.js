import React,{useState} from 'react'
export function Themes(){
    const [modetoggle, setModetoggle] = useState('lightmode')
    const changeTheme=(mode)=>{
        if(mode==='darkmode'){
            setModetoggle('darkmode')
            return 'border-indigo-700'
        } else {return 'border-white'}
    }
    return{
        changeTheme:changeTheme
    }
}
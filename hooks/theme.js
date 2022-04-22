// import React,{useState} from 'react'
const themeSwitching=(mode)=>{
 if(mode){
    return{
        bg:'#fff',
        text:'#252238',
        navbg:'rgba(255,255,255,0.8)'
     }
   
 }
 else{
    return{
        bg:'#252238',
        text:'#fff',
        navbg:'rgba(37,34,56,0.7)'
     }
 }
}
export {themeSwitching}
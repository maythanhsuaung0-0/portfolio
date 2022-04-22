import React,{createContext,useContext,useState} from 'react'

const Theme=createContext()
const ThemeProvider=({children})=>{
 const [lightmode, setlightmode] = useState(true)
 const toggleMode=()=>{
     setlightmode(!lightmode)
 }
 return(
     <Theme.Provider value={[lightmode,toggleMode]}>
         {children}
     </Theme.Provider>
 )
}

const useTheme=()=>{
    let [lightmode,toggleMode]=useContext(Theme)
    return{
        mode:lightmode,
        toggle:toggleMode
    }
}
export {useTheme}
export default ThemeProvider
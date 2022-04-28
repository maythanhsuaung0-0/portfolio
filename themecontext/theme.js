import React,{createContext,useContext,useState} from 'react'

const Theme=createContext()
const ThemeProvider=({children})=>{
 const [lightmode, setlightmode] = useState(true)
 const toggleMode=()=>{
    if(lightmode){
        localStorage.theme = 'dark'
        document.documentElement.classList.add('dark')
        setlightmode(false)

    }
    else{
        localStorage.theme = 'light'
        document.documentElement.classList.remove('dark')
        setlightmode(true)
    }
    // if (localStorage.theme === 'dark') {
    // document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }
      
  // Whenever the user explicitly chooses light mode
  //localStorage.theme = 'light'
  
  // Whenever the user explicitly chooses dark mode
  //localStorage.theme = 'dark'
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
}}

export {useTheme}
export default ThemeProvider
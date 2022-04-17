import React from 'react'

function Button({children,func,variant='contain'}) {
  return (
    <>
    {
        variant==='contain'?
            <button className="mt-5 px-7 py-2 text-base text-white font-semibold bg-indigo-600 w-fit rounded-lg">{children}</button>:
            <button className="mt-5 px-7 py-2 text-base  font-semibold border border-indigo-600 bg-transparent text-indigo-600 w-fit rounded-lg">{children}</button>
    }</>
  )
}

export default Button
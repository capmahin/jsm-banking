import React from 'react'

const Footer = ({user,type='desktop'}:FooterProps) => {
  return (
    <footer className='footer'>
       <div className=
       {type === 'mobile'? 
       'footer_name-mobile': 'footer_name'}>
         <p className='text-xl font-bold text-gray-700'>
            {user.name}
         </p>
       </div>

       <div className=
       {type === 'mobile'? 
       'footer_name-email': 'footer_email'}>
          <h1 className='text-14 truncate font-normal
          text-gray-600'>
            {user.name}
          </h1>
       </div>
    </footer>
  )
}

export default Footer
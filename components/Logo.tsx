import React from 'react'

function Logo(props: any) {

const { renderDefault, title } = props;

  return (
    <div className="flex items-center space-x-2">
    
   <Image className="rounded-full object-cover"
   height={50}
   width={50}
   src="https://i.postimg.cc/KjpHL5Cm/Whats-App-Image-2024-07-11-at-16-50-51-1.jpg"
   alt="logo"
   />
   <>{renderDefault(props)}</>
    
    
    </div>
  )
}

export default Logo

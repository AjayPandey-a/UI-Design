import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const PageContent = (props) => {
  return (
    <div className='pb-16 pt-6 flex gap-10 itemce-ceneter h-[90vh] '>
        <LeftContent/>
        <RightContent users={props.users}/>
      
    </div>
  )
}

export default PageContent

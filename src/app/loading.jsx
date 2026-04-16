import React from 'react'
import { BeatLoader } from 'react-spinners'

function GlobalLoadingSpinner() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <BeatLoader/>
    </div>
  )
}

export default GlobalLoadingSpinner
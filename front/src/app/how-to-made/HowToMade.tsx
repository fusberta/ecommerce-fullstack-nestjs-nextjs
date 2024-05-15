import Build from '@/components/ui/build/Build'
import React, { FC } from 'react'

const HowToMade: FC = () => {
  return (
    <div className='overflow-y-scroll snap-y snap-mandatory bg-slate-950 flex justify-center items-center flex-col px-10'>
        <Build />
    </div>
  )
}

export default HowToMade
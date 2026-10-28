import React from 'react'

const Dashboard = () => {
  return (
    <div  className='relative flex h-screen w-full items-center justify-center overflow-hidden bg-slate-50 px-4 transition-colors duration-300 dark:bg-[#07070c]'>
        <div className='pointer-events-none absolute -top-32 left-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px] dark:block'>
            <div  className='relative w-full max-w-sm rounded-2xl border border-slate-200/70 bg-white/80 p-6 sm:p-8 text-center shadow-xl shadow-slate-200/50 backdrop-blur-xl dark:border-white/[0.08] dark:bg-white/[0.03] dark:shadow-black/40'>
                    
            </div>
        </div>
      
    </div>
  )
}

export default Dashboard

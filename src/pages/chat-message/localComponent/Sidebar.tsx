import React from 'react'
import { TSidebar } from '~/@types/dictionary';

export default function Siderbar({ type }: { type: TSidebar }) {
    return (
        <div className='w-76 h-dvh border-r-1 border-secondary flex flex-col bg-background'>
            {/* <h1>{type.title}</h1> */}
        </div>
    )
}


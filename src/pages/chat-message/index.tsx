'use client'
import React from 'react'
import ChatText from './localComponent/ChatText'
import Siderbar from './localComponent/Sidebar'

export default function ChatPanel() {
    return (
        <div className='flex w-full pl-12'>
            <Siderbar />
            <ChatText />
        </div>
    )
}

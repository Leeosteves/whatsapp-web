'use client'
import React, { useState } from 'react'
import {
  containerClass,
  wrapperClass,
  backdropButtonClass,
  sectionButtons,
  buttonClass,
  TextButton,
  activeButton,
  IconClass,
  activeSpan,
  buttonContainer,
} from './styles';
import { PiChatCircleText } from 'react-icons/pi'
import { PiPhone } from 'react-icons/pi'
import { SiCodacy } from 'react-icons/si'
import { CgMenuRight } from "react-icons/cg";
import { IoIosStarOutline } from 'react-icons/io'
import { LuArchive } from 'react-icons/lu'
import { GoGear } from 'react-icons/go'
import { IDrawerProps, TMenuKeys } from './types';
import Separator from '../Separator';
import AvatarTX from '../Avatar';

export default function Drawer({dict}: IDrawerProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<TMenuKeys>('chats');
  const isActive = (tab: string) => activeTab === tab;

  return (
    <div className={wrapperClass}>
      {/* Drawer */}
      <div className={containerClass(isOpen)}>
        {/* Menu Button */}
      <div className={buttonContainer(isOpen)}>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
        }}
         className={buttonClass(isOpen,true)}>
          <CgMenuRight className={IconClass} size={19} />
        </button>
        </div>
        {/* <Separator h={10}/> */}
        {/* Wrapper */}
        <section className={sectionButtons(isOpen)}>
          {/* WrapperUp */}
          <section>
            {/* Chats */}
            <div className={buttonContainer(isOpen)}>
            <button onClick={()=> {
              setActiveTab('chats')
              if(isOpen){
                setIsOpen(false)
              }
            }} className={`${buttonClass(isOpen)}
            ${isActive('chats') && activeButton }
            `}>
              <PiChatCircleText className={IconClass} size={19} />
              {isOpen && <h3 className={TextButton}>{dict.chats}</h3>}
            </button>
            {isActive('chats') && <span className={activeSpan} />}
            </div>
            {/* Calls */}
            <div className={buttonContainer(isOpen)}>
            <button onClick={()=> {
              setActiveTab('calls')
              if(isOpen){
                setIsOpen(false)
              }
            }} className={`${buttonClass(isOpen)}
            ${isActive('calls') && activeButton }
            `}>
              <PiPhone className={IconClass} size={19} />
              {isOpen && <h3 className={TextButton}>{dict.calls}</h3>}
            </button>
            {isActive('calls') && <span className={activeSpan} />}
            </div>
            {/* Status */}
            <div className={buttonContainer(isOpen)}>
            <button onClick={()=> {
              setActiveTab('status')
              if(isOpen){
                setIsOpen(false)
              }
            }}  className={`${buttonClass(isOpen)}
            ${isActive('status') && activeButton }
            `}>
              <SiCodacy className={IconClass} size={19} />
              {isOpen && <h3 className={TextButton}>{dict.status}</h3>}
            </button>
            {isActive('status') && <span className={activeSpan} />}
            </div>
            <Separator divider={`${isOpen ? 'w-11/12' : 'w-8/12'} border-b-1 border-border`} h={10}/>
            <div className={buttonContainer(isOpen)}>
        <button onClick={()=> {
          setActiveTab('ia')
          if(isOpen){
            setIsOpen(false)
          }
            }} className={`${buttonClass(isOpen)}
            ${isActive('ia') && activeButton }
            `}>
          <AvatarTX className={`${IconClass} w-5 h-5`} src="./logo/meta-ai.png"/>
          {isOpen && <h3 className={TextButton}>{dict.ia}</h3>}
        </button>
        {isActive('ia') && <span className={activeSpan} />}
          </div>
          </section>
        {/* WrapperBottom */}
          <section>
            {/* Favorites */}
          <div className={buttonContainer(isOpen)}>
            <button onClick={()=> {
              setActiveTab('favorites')
              if(isOpen){
                setIsOpen(false)
              }
            }} className={`${buttonClass(isOpen)}
            ${isActive('favorites') && activeButton }
            `}>
            <IoIosStarOutline className={IconClass} size={19} />
            {isOpen && <h3 className={TextButton}>{dict.favorites}</h3>}
            </button>
            {isActive('favorites') && <span className={activeSpan} />}
            </div>
            {/* Archived */}
            <div className={buttonContainer(isOpen)}>
            <button onClick={()=> {
              setActiveTab('archived')
              if(isOpen){
                setIsOpen(false)
              }
            }} className={`${buttonClass(isOpen)}
            ${isActive('archived') && activeButton }
            `}>
            <LuArchive className={IconClass} size={19} />
            {isOpen && <h3 className={TextButton}>{dict.archived}</h3>}
            </button>
            {isActive('archived') && <span className={activeSpan} />}
            </div>
            <Separator divider={`${isOpen ? 'w-11/12' : 'w-8/12'} border-b-1 border-border`} h={10}/>
        </section>
          </section>
          {/* Settings */}
          <div className={buttonContainer(isOpen)}>
        <button onClick={()=> {
              setActiveTab('settings')
            }} className={`${buttonClass(isOpen)}
            ${isActive('settings') && activeButton }
            `}>
          <GoGear className={IconClass} size={19} />
          {isOpen && <h3 className={TextButton}>{dict.settings}</h3>}
        </button>
          </div>
           {/* Avatar */}
           <div className={buttonContainer(isOpen)}>
        <button onClick={()=> {
            }} className={`${buttonClass(isOpen)}
            `}>
          <AvatarTX className={`${IconClass} w-5.5 h-5.5`} src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
          {isOpen && <h3 className={TextButton}>{dict.profile}</h3>}
        </button>
          </div>
      </div>
      {isOpen && (
        <button onClick={() => setIsOpen(false)} className={backdropButtonClass} />
      )}
    </div>
  );
}

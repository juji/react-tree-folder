'use client'

import { css } from '@emotion/css'
import { useState } from 'react'


export function MenuButton(){

  const [ isOpen, setIsOpen ] = useState(false)
  function onClick(){
    const toc = document.querySelector('nav.toc')
    if(toc) {
      
      if(toc.classList.contains('open')) setIsOpen(false)
      else setIsOpen(true)

      toc.classList.toggle('open')

    }
  }


  return <button 
    onClick={onClick}
    className={css`
      background-color: tomato;
      color: white;
      border: 0px;
      display: flex;
      align-items: center;
      padding: 1rem;
      cursor: pointer;
      position: fixed;
      bottom:0px;
      right:0px;
      z-index: 20;

      &:hover{
        background-color: #fd7057;
      }
      &:active{
        background-color: #fb4d2e;
      }

      @media screen and (min-width: 1207px){
        display: none;
      }
    `}>
      <div className={css`
        width: 24px;
        height: 24px;
        position: relative;
      `}>
        <div className={css`
          background-color: var(--foreground-rgb);
          height: 2px;
          width: 100%;
          position: absolute;
          top:3px;
          transform-origin: center center;
          transition: transform 300ms 200ms ease-out;
          ${isOpen ? 'transform: translateY(8px) rotateZ(45deg);' : ''}
        `}></div>
        <div className={css`
          background-color: var(--foreground-rgb);
          height: 2px;
          width: 100%;
          position: absolute;
          top: calc( 50% - 1px);
          transform-origin: center center;
          transition: transform 300ms ease-out;
          ${isOpen ? 'transform: scaleX(0);' : ''}
        `}></div>
        <div className={css`
          background-color: var(--foreground-rgb);
          height: 2px;
          width: 100%;
          position: absolute;
          bottom:3px;
          transform-origin: center center;
          transition: transform 300ms 200ms ease-out;
          ${isOpen ? 'transform: translateY(-8px) rotateZ(-45deg);' : ''}
        `}></div>
      </div>
    </button>

}
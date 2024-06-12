'use client'

import { useTheme } from 'next-themes'
import { TypeAnimation } from 'react-type-animation';

import { ReactNode, useEffect, useState, useMemo } from 'react'
import Switch from './switch'
import './style.css'

function MyAnimatedText({ text }:{ text: string }){

  const [seq, setSeq] = useState<(string|number)[]>([
    text,
  ])
  const [to, setTo] = useState(true)

  useEffect(() => {
    setSeq([
      seq[seq.length-1],
      text
    ])
    setTo(false)
  },[ text ])

  useEffect(() => {
    if(!to) setTimeout(() => {
      setTo(!to)
    },30)
  },[to])


  return to ? <TypeAnimation
    sequence={seq}
    preRenderFirstString={true}
    wrapper="span"
    cursor={false}
  /> : null

}

export default function NavContainer({ children }:{ children: ReactNode }){

  const { theme, setTheme } = useTheme()
  const [ currentTheme, setCurrentTheme ] = useState<string>()
  useEffect(() => {
    setCurrentTheme(theme)
  },[theme])

  return <div className={'nav-container'}>
    {children}
    <div className='lights'>
      <div className='lights-child'>
      <Switch value={theme==='dark'} onChange={(value) => {
        setTheme(value === true ? 'dark' : 'light')
      }} />{currentTheme ? <MyAnimatedText text={currentTheme} /> : null}
      </div>
    </div>
  </div>

}
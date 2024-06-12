'use client'

import { ChangeEvent, useId, useEffect, useState } from "react"
import styles from './style.module.css'

export default function Switch({ 
  value,
  onChange,
  name,
}:{
  value: boolean 
  onChange: (value: boolean) => void
  name?: string
}){

  const id = useId()
  const [ client, setClient ] = useState<boolean>(false)
  const localOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked)
  }

  useEffect(() => {
    setClient(true)
  },[])

  return client ? <label className={styles.label} htmlFor={id}>
    <input 
      defaultChecked={value}
      onChange={localOnChange}
      className={styles.input} id={id} name={name} 
      type="checkbox" />
    <span className={styles.span}></span>
  </label> : null

}
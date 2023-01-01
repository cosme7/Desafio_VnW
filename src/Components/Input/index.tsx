import React from 'react'
import { IInputProps } from './types'
import './style.scss'

export default function Input({type, name, placeholder}: IInputProps) {
  return (
    <input type={type} name={name} placeholder={placeholder} />
  )
}

import React from 'react'
import { IButtonProps } from "./types";
import './style.scss'

export default function Button({title, className}: IButtonProps) {
  return (
    <button className={className}>{title}</button>
  )
}

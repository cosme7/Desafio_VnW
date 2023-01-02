import React from 'react'
import { ITextProps } from './types'
import './style.scss'

export default function Text({title, sub, className}: ITextProps) {
  return (
    <div className={className}>
        <div className='line'>
            <hr />
            <p className='line_txt'>Viagens Nacionais</p>
        </div>
        <h2>{title}</h2>
        <p>{sub}</p>
        <button className='btn_txt'>Agendar</button>
    </div>
  )
}

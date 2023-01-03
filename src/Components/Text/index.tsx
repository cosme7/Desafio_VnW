import { ITextProps } from './types'
import './style.scss'

export default function Text({children, className}: ITextProps) {
  return (
    <div className={className}>
        <div className='line'>
            <hr />
            <p className='line_txt'>Viagens Nacionais</p>
        </div>
        {children}
    </div>
  )
}

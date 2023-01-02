import { ICardProps } from './types'
import './style.scss'

export default function Card({image, name, className}: ICardProps){
  return (
    <>
      <div className={className}>
        <img src={image} alt={name} title={name} />
        <p>{name}</p>
      </div>
    </>
  )
}

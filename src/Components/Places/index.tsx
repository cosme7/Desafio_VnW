import { IPlacesProps } from './types'
import './style.scss'

export default function Places({name, title}: IPlacesProps) {
  return (
    <div className='places_box'>
      <img src={name} alt={title} title={title} />
      <p>{title}</p>
    </div>
  )
}

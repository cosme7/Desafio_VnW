import { IFooterNavProps } from './types'
import './style.scss'

export default function FooterNav({children, linkA, linkB, linkC, linkD}: IFooterNavProps) {
  return (
    <>
      <div className="footer_box">
        {children}
        <nav>
          <ul className='footer_ul'>
            <li>
              <a href="#">{linkA}</a>
            </li>
            <li>
              <a href="#">{linkB}</a>
            </li>
            <li>
              <a href="#">{linkC}</a>
            </li>
            <li>
              <a href="#">{linkD}</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

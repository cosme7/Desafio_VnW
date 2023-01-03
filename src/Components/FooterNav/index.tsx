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
              <a href="https://www.linkedin.com/company/vainaweb/" target='_blank' rel="noreferrer" >{linkA}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/vainaweb/" target='_blank' rel="noreferrer" >{linkB}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/vainaweb/" target='_blank' rel="noreferrer" >{linkC}</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/vainaweb/" target='_blank' rel="noreferrer" >{linkD}</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

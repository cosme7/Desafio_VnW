import Button from '../Button'
import Mobile from '../Mobile'
import Logo from '../../Assets/logo_01.png'
import './style.scss'

export default function Header() {
  return (
    <>
      <header>
        <section className='h--container'>
          <img src={Logo} alt="Logo" title='Logo' />
          <Mobile />
          <nav aria-label='primary-navigation' className='nav_desktop'>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#benefícios">Benefícios</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
            </ul>
            <Button className='btn' title='Agendar'/>
          </nav>
        </section>
      </header>
    </>
  )
}

import Button from '../Button'
import Logo from '../../Assets/logo_01.png'
import './style.scss'

export default function Header() {
  return (
    <>
      <header>
        <section className='h--container'>
          <img src={Logo} alt="Logo" title='Logo' />
          <nav aria-label='primary-navigation'>
            <ul>
              <li>
                <a href="#" target='_blank' >Sobre</a>
              </li>
              <li>
                <a href="#" target='_blank' >Benefícios</a>
              </li>
              <li>
                <a href="#" target='_blank' >Contato</a>
              </li>
            </ul>
            <Button title='Agendar'/>
          </nav>
        </section>
      </header>
    </>
  )
}

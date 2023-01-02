import FooterNav from '../FooterNav'
import Logo from '../../Assets/logo_01.png'
import './style.scss'

export default function Footer() {
  return (
    <>
        <footer>
            <section className='footer--container'>
                <FooterNav linkA='Sobre nós' linkB='Mural de Memórias' linkC='Eventos do Gudi' linkD='Nosso blog'>
                  <img src={Logo} alt="Logo" title='Logo' />
                </FooterNav>
                <FooterNav linkA='Chat Virtual' linkB='SAC Online' linkC='Ouvidoria' linkD='FAQ'>
                  <h4>Contato</h4>
                </FooterNav>
                <FooterNav linkA='Conta digital Gudi' linkB='Voaje com Milhas' linkC='C6 Átomos' linkD='ID Jovem'>
                  <h4>Benefícios</h4>
                </FooterNav>
                <FooterNav linkA='O melhor do Brasil' linkB='Cidades frequentes' linkC='Pontos turísticos' linkD='Restaurante'>
                  <h4>Lugares</h4>
                </FooterNav>
                <FooterNav linkA='Cultura e tradições' linkB='Pratos típicos' linkC='Mitos brasileiros' linkD='Carnaval'>
                  <h4>Curiosidades</h4>
                </FooterNav>
            </section>
        </footer>
    </>
  )
}

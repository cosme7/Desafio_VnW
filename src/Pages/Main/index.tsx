import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
import Text from '../../Components/Text'
import Clima from '../../Assets/main_01.png'
import Amigos from '../../Assets/main_02.png'
import Exp from '../../Assets/main_03.png'
import Places from '../../Components/Places'
import Rio from '../../Assets/main_04-1.png'
import Ostras from '../../Assets/main_04-2.png'
import Caldas from '../../Assets/main_04-3.png'
import Amazon from '../../Assets/main_04-4.png'
import './style.scss'

export default function Main() {
  return (
    <>
      <main>
        <section className='hero--container'>
          <div className='hero_txt'>
            <h1>Para qual estado você deseja ir?</h1>
            <Input name='name' type='text' placeholder='Pesquisar'/>
            <Button title='Buscar' />
          </div>
        </section>

        <section className='viagens--primary'>
          <img src={Clima} alt="Bebendo ao Pôr do Sol" />
          <Text 
            className='box_txt'
            title='O clima perfeito, no lugar perfeito' 
            sub='Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.' 
          />
        </section>

        <section className='viagens--inverted'>
          <img src={Amigos} alt="Amigos ao Pôr do Sol" />
          <Text 
            className='box_txt inverted'
            title='Curta uma nova vibe entre amigos' 
            sub='Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos Planos Multi.' 
          />
        </section>

        <section className='viagens--primary'>
          <img src={Exp} alt="Dando às mãos na água" />
          <Text 
            className='box_txt box_h2'
            title='Algumas experiências são inexplicáveis' 
            sub='Conheça as fontes termais de Caldas Novas, Goiás. Águas quentes, num clima sereno, relaxante e natural.' 
          />
        </section>

        <section className="place--container">
          <Places name={Rio} title='Rio de Janeiro'/>
          <Places name={Ostras} title='Rio das Ostras'/>
          <Places name={Caldas} title='Caldas Novas'/>
          <Places name={Amazon} title='Amazônia'/>
        </section>
        
      </main>
    </>
  )
}

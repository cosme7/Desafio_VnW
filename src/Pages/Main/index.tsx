// Components
import Button from '../../Components/Button'
import Input from '../../Components/Input'
import Text from '../../Components/Text'
import Places from '../../Components/Places'
import Card from '../../Components/Card'
import Form from '../../Components/Form'
// Second Container
import Clima from '../../Assets/main_01.png'
import Amigos from '../../Assets/main_02.png'
import Exp from '../../Assets/main_03.png'
// Third Container
import Rio from '../../Assets/main_04-1.png'
import Ostras from '../../Assets/main_04-2.png'
import Caldas from '../../Assets/main_04-3.png'
import Amazon from '../../Assets/main_04-4.png'
// Fourth Container
import Son from '../../Assets/main_05-1.png'
import Jump from '../../Assets/main_05-2.png'
import Dog from '../../Assets/main_05-3.png'
import Montain from '../../Assets/main_05-4.png'
import Bike from '../../Assets/main_05-5.png'
import Friends from '../../Assets/main_05-6.png'
// Box Card Image
import Viagem from '../../Assets/main_06-1.svg'
import City from '../../Assets/main_06-2.svg'
import Coco from '../../Assets/main_06-3.svg'
import Restaurante from '../../Assets/main_06-4.svg'
// 
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
          <Text className='box_txt'>
            <h2>O clima perfeito, no lugar perfeito</h2>
            <p>Planeje sua viagem com a sua paquera, compartilhar momentos preciosos juntos não tem preço.</p>
          </Text>
        </section>

        <section className='viagens--inverted'>
          <img src={Amigos} alt="Amigos ao Pôr do Sol" />
          <Text className='box_txt box_txt--inverted'>
            <h2>Curta uma nova vibe entre amigos</h2>
            <p>Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre amigos. Conheça nossos <span>Planos Multi.</span></p>
          </Text>
        </section>

        <section className='viagens--primary'>
          <img src={Exp} alt="Dando às mãos na água" />
          <Text className='box_txt box_h2'>
            <h2>Algumas experiências são inexplicáveis</h2>
            <p>Conheça as fontes termais de <span>Caldas Novas, Goiás</span>. Águas quentes, num clima sereno, relaxante e natural.</p>
          </Text>
        </section>

        <section className="place--container">
          <Places name={Rio} title='Rio de Janeiro'/>
          <Places name={Ostras} title='Rio das Ostras'/>
          <Places name={Caldas} title='Caldas Novas'/>
          <Places name={Amazon} title='Amazônia'/>
        </section>
        
        <section className="mural--container">
          <p className='mural-paragraph'>use a hashtag #brasilisverigudi</p>
          <h2>Nosso mural de Experiências</h2>
          <div className="mural_img">
            <img src={Son} alt="Brincando com o Filho" />
            <img src={Jump} alt="Pulando a Beira-Mar" />
            <img src={Dog} alt="Selfie com Cachorro" />
            <img src={Montain} alt="Selfie nas Montanhas" />
            <img src={Bike} alt="Selfie na Estrada andando de Bicicleta" />
            <img src={Friends} alt="Selfie com os Amigos" />
          </div>
          <div className="mural_card">
            <Card className='card_mural' image={Viagem} name='O melhor do Brasil' />
            <Card className='card_mural card_mural--inverted' image={City} name='Cidades mais frequentadas' />
            <Card className='card_mural' image={Coco} name='Pontos turísticos' />
            <Card className='card_mural card_mural--inverted' image={Restaurante} name='Restaurantes' />
          </div>
        </section>

        <section className="form-container">
          <h2>Fale conosco</h2>
          <Form />
        </section>
      </main>
    </>
  )
}

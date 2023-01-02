import Input from '../Input'
import Button from '../Button'
import './style.scss'

export default function Form() {
  return (
    <form  className='form_main'>
        <Input name='email' type='email' placeholder='Diga o seu melhor email' />
        <Input name='name' type='text' placeholder='Assunto' />
        <textarea name="" id="" cols={30} rows={10} placeholder='Escreva a sua mensagem' />
        <Button className='border_light' title='Enviar' />
    </form>
  )
}

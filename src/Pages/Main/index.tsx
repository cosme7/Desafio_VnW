import React from 'react'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
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
      </main>
    </>
  )
}

import { useState } from 'react'
import './App.css'

const App = () => {
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const novoComentario = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      comentario: comentario,
      createAt: new Date()
    }

    console.log(novoComentario)
    setEmail('')
    setComentario('')
  }


  return (
    <div id='appContainer'>
      <h1>Seção de comentários</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" id='email'>Email</label>
        <input 
          type="text" 
          name='email'
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label htmlFor="comentario" id='comentario'>Comentário</label>
        <textarea 
          name='comentario' 
          rows='4'
          required
          value={comentario}
          onChange={(ev) => setComentario(ev.target.value)}
          ></textarea>
        <button type='submit' id='submit'>Enviar comentário</button>
        <hr />
        <div id='areaDeComentarios' >
          <h3>exemplo@email.com</h3>
          <span>Em 01/01/2025</span>
          <p>comentário de exemplo</p>
        </div>
      </form>
    </div>
  )
}

export default App

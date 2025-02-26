import { useState } from 'react'
import './App.css'

const App = () => {
  const [email, setEmail] = useState('')
  const [conteudo, setConteudo] = useState('')
  const [comentarios, setComentarios] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const novoComentario = {
      id: Math.floor(Math.random() * 1000000),
      email: email,
      conteudo: conteudo,
      createAt: new Date()
    }

    setComentarios((state) => [novoComentario, ...state])
    setEmail('')
    setConteudo('')
  }


  return (
    <div id='appContainer'>
      <h2>Seção de comentários</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id='email'
          required
          value={email}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <label htmlFor="conteudo">Comentário</label>
        <textarea 
          id='conteudo' 
          rows='4'
          required
          value={conteudo}
          onChange={(ev) => setConteudo(ev.target.value)}
          ></textarea>
        <button type='submit' id='submit'>Enviar comentário</button>
        <hr />
        <section id='areaDeComentarios' >
          {comentarios.length > 0 ? 
          (         
            comentarios.map((comentario) => (
              <div key={comentario.id}>
                <h3>{comentario.email}</h3>
                <span>Em {comentario.createAt.toLocaleString()}</span>
                <p>{comentario.conteudo}</p>
              </div>
            ))
          )
          : (
            <p>Seja o primeiro a comentar!</p>
          )}
        </section>
      </form>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [comentarios, setComentarios] = useState(['Seja o primeiro a comentar'])

  return (
    <div id='appContainer'>
      <h1>Seção de comentários</h1>
      <form>
        <label htmlFor="email">Email</label>
        <input type="text" name='email'/>
        <label htmlFor="comentario">Comentário</label>
        <textarea name='comentario' rows='4'></textarea>
        <input type="submit" name="enviar" value='Enviar comentário'/>
        <hr />
        {comentarios.map((comentario, index) => (
          <p key={index}>{comentario}</p>
        ))}
      </form>
    </div>
  )
}

export default App

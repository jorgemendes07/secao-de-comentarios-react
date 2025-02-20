import { useState } from 'react'
import './App.css'

function App() {
  

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
      </form>
    </div>
  )
}

export default App

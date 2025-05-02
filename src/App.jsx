import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CardVolei from './components/CardVolei';
const quadradao = [
  {
    nome: "Vôlei",
    img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/Lucarelli-avalia-volei-brasileiro-em-Paris-2024.jpg?w=873",
    descricao: "O vôlei é um esporte dinâmico que exige agilidade, comunicação e espírito de equipe.Seja na quadra ou na praia, ele proporciona diversão e competitividade."
  },
]

const colors = ['red', 'white', 'green', 'yellow']

function App() {
  const [contador, setContador] = useState(0)
  function maisCor() {
    if (contador < 0) {
      setContador(colors.length - 1)
    } else if (contador > colors.length) {
      setContador(0)
    } else {
      setContador(contador + 1)
    }
  }
  function menosCor() {
    if (contador <= 0) {
      setContador(colors.length - 1)
    } else {
      setContador(contador - 1)
    }
  }
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='body'>
        <CardVolei cor={colors[contador]}
          nome={quadradao[0].nome}
          img={quadradao[0].img}
          descricao={quadradao[0].descricao}

        />
      </div>
      <div>
        <p>Total de quadradões: {contador}
          <button
            onClick={maisCor}>Aumentar </button>
          <button
            onClick={menosCor}>Diminuir </button>
        </p>
      </div>
    </>
  )
}

export default App

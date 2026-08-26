import {useEffect, useState} from 'react'
import './App.css'

function App() {

  const textos = [
    'Estudante de Engenharia de Software - 3º Período',
    'Desenvolvedora Back-End em formação',
    'Java | Python | C',
    'Criando projetos reais com tecnologia'
  ]


const [textoAtual, setTextoAtual] = useState('')
const [indiceTexto, setIndiceTexto] = useState(0)
const [indiceLetra, setIndiceLetra] = useState(0)
const [apagando, setApagando] = useState(false)

useEffect(()=>{
  const texto = textos[indiceTexto]
  const intervalo = setTimeout(() => {
    if (!apagando) {
      setTextoAtual (texto.substring(0, indiceLetra + 1))
      setIndiceLetra(indiceLetra + 1)
      if(indiceLetra === texto.length){
        setTimeout(() => {
          setApagando(true)
        }, 1200)
      }
      }
    else {
      setTextoAtual(texto.substring(0, indiceLetra - 1))
      setIndiceLetra(indiceLetra - 1)

      if (indiceLetra === 0) {
        setApagando(false)
        setIndiceTexto((indiceTexto + 1) % textos.length)
      }
    }
  }, apagando ? 50 : 100 )
  return () => clearTimeout(intervalo)
}, [indiceLetra, apagando, indiceTexto])
return(
  <>
    <header className='cabecalho'>
      <div className='logo'>
        Lett.Dev
      </div>

      <nav className='menu'>
        <a href="#inicio">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#projetos">Experiências</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#contato">Contato</a>
      </nav>
    </header>
    <main>
      <section className='inicio' id='inicio'>
        <div className="inicio-conteudo">
          <p className='saudacao'>
            Olá, eu sou a 
          </p>
          <h1>
            Letícia!
          </h1>
          <h2>
            &lt;{textoAtual}<span className='cursor'>|</span>&gt;
          </h2>
        </div>
      </section>
    </main>
  </>
)
}

export default App
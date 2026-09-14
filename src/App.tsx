import {useEffect, useState} from 'react'
import conecta60 from './assets/conecta60.png'
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
          <a href="#projetos" className="botao-projetos">Ver projetos</a>
        </div>
      </section>
      <section className='sobre' id='sobre'>
        <div className="sobre-conteudo">
          <h2>Sobre Mim</h2>
          <p>Sou estudante de Engenharia de Software e venho construindo minha experiência por meio de projetos acadêmicos e pessoais.</p>
          <p>Tenho interesse principalmente em desenvolvimento de sistemas, com foco em back-end. Atualmente, estudo e desenvolvo projetos utilizando tecnologias como Java, Python e C, além de estar me aprofundando em desenvolvimento front-end com HTML, CSS e React.</p>
          <p>Gosto de transformar o que aprendo em projetos práticos, buscando evoluir tanto na programação quanto na organização e construção de soluções completas.</p>
        </div>
      </section>
      <section className='experiencias' id='projetos'>
        <h2>Minhas Experiências</h2>
        <div className="cards-experiencias">
          <div className="card">
            <div className="card-imagem"><img src={conecta60} alt="Projeto Conecta 60+" /></div>
            <h3>Conecta 60+</h3>
            <p>Projeto voltado para a inclusão e alfabetização digital de pessoas com 60 ou mais anos, desenvolvido em ambiente acadêmico.</p>
          </div>
          <div className="card">
            <div className="card-imagem">/AQUI VAI ENTRAR A IMAGEM DO PROJETO/</div>
            <h3>Projetos de Acadêmicos</h3>
            <p>Desenvolvimento de aplicações acadêmicas, utilizando linguagens como Python e C</p>
          </div>
          <div className="card">
            <div className="card-imagem">/AQUI VAI ENTRAR A IMAGEM DO PROJETO/</div>
            <h3>Projetos Pessoais</h3>
            <p>Desenvolvimento de aplicações gerais para melhorar lógica de programação, versionamento de projetos e conhecimentos gerais, utilizando linguagens como Python e C</p>
          </div>
        </div>
      </section>
      <section className='habilidades' id='habilidades'>

  <h2>Habilidades</h2>

  <div className='habilidades-conteudo'>

    <div className='habilidade flip-card'>
  <div className='flip-card-conteudo'>

    <div className='flip-card-frente'>
      <h3>Java</h3>
    </div>

    <div className='flip-card-verso'>
      <p>Java Completo + POO – Udemy</p>
      <p>Projetos pessoais</p>
    </div>

  </div>
</div>

    <div className='habilidade flip-card'>
  <div className='flip-card-conteudo'>

    <div className='flip-card-frente'>
      <h3>Python</h3>
    </div>

    <div className='flip-card-verso'>
      <p>Curso em Vídeo — Mundos 1, 2 e 3</p>
      <p>Projetos acadêmicos e pessoais</p>
    </div>

  </div>
</div>

<div className='habilidade flip-card'>
      <div className='flip-card-conteudo'>

        <div className='flip-card-frente'>
          <h3>C</h3>
        </div>

        <div className='flip-card-verso'>
          <p>ESW - Estruturas de Dados</p>
          <p>Projetos acadêmicos</p>
        </div>

      </div>
</div>

<div className='habilidade flip-card'>
      <div className='flip-card-conteudo'>

        <div className='flip-card-frente'>
          <h3>HTML / CSS</h3>
        </div>

        <div className='flip-card-verso'>
          <p>Curso em Vídeo + Faculdade</p>
          <p>Projetos acadêmicos e pessoais</p>
        </div>

      </div>
</div>

    <div className='habilidade flip-card'>
  <div className='flip-card-conteudo'>

    <div className='flip-card-frente'>
      <h3>React</h3>
    </div>

    <div className='flip-card-verso'>
      <p>Faculdade - Lab. Front</p>
      <p>Portfolio</p>
    </div>

  </div>
</div>

    <div className='habilidade'>
      <h3>Git & GitHub</h3>
    </div>

  </div>

</section>
    </main>
  </>
)
}

export default App
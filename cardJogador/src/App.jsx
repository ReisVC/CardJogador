import { useEffect, useState } from 'react'
import CardJogador from './components/CardJogador'
import Titulo from './components/Titulo'
import hikaru from './assets/img/hikaru.png'
import ding from './assets/img/ding.png'
import alireza from './assets/img/alireza.png'
import fabiano from './assets/img/fabiano.png'
import ian from './assets/img/ian.png'
import magnus from './assets/img/magnus.png'
import './App.css'

// Função principal do App
export default function App() {

  const [changeColor, setChangeColor] = useState(false)
  const [changeNameButton, setChangeNameButton] = useState(false);
  const [buttonName, setButtonName] = useState("Luz");

  const handleChangeNameButton = () => {
    if (buttonName == "Luz") {
      setButtonName("Trevas");
    } else {
      setButtonName("Luz")
    }
  }

  const handleChangeColor = () => {
    handleChangeNameButton();
    if (changeColor) {
      setChangeColor(false);
    } else {
      setChangeColor(true)
    }
  }
  // Array de objetos representando os jogadores 
  // Cada onjeto tem um id e as props nome, posição, time, avaliação e imagem
  const jogadores = [
    {
      id: 1,
      nome: "Magnus Carlsen",
      posicao: "1º",
      time: "Tigrão",
      avaliacao: 10,
      imagem: magnus
    },
    {
      id: 2,
      nome: "Fabiano Caruana",
      posicao: "2º",
      time: "Cavalaria",
      avaliacao: 9.5,
      imagem: fabiano
    },
    {
      id: 3,
      nome: "Ding Liren",
      posicao: "3º",
      time: "Dragões",
      avaliacao: 9.4,
      imagem: ding
    },
    {
      id: 4,
      nome: "Ian Nepomniachtchi",
      posicao: "4º",
      time: "Trovões",
      avaliacao: 9.2,
      imagem: ian
    },
    {
      id: 5,
      nome: "Alireza Firouzja",
      posicao: "5º",
      time: "Fênix",
      avaliacao: 9.0,
      imagem: alireza
    },
    {
      id: 6,
      nome: "Hikaru Nakamura",
      posicao: "6º",
      time: "Samurais",
      avaliacao: 8.9,
      imagem: hikaru
    }
  ];

  return (
    <main className={`main ${changeColor ? "color-active" : ""}`}
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        flexWrap: "wrap" // permite a quebra de linhas se a tela for pequena
      }}
    >
      <div style={{ width: "100%", marginTop: "2%"}} className={`${changeColor} ? "color-active" : ""`}>
        <Titulo texto="Lista Jogadores " />
      </div>
      {jogadores.map((j) => (
        // key é necessário para o React identificar cada item da lista
        // {...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
        <CardJogador key={j.id}{...j} />
      ))}

      <button onClick={handleChangeColor}>
        <i class={`fas fa-${buttonName == "Luz" ? "sun" : "moon"} fa-lg`}></i>
        </button>
    </main>
  )
}
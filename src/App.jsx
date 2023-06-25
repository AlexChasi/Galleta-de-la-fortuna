import { useState } from 'react';
import './App.css';
import phrases from './assets/phrases.json';
import { Phrase } from './components/phrase/phrase';
import { Title } from './components/title/title';
import { Button } from './components/button/button';

function App() {
  const [phrase, setPhrase] = useState({ phrase : 'Toca el botón para saber tu frase de la fortuna!', author: 'Alex Chasi'});
  const [backgroundImage, setbackgroundImage] = useState(2);

  const handleClick = () => {
    const phrasePick = Math.ceil(Math.random() * (phrases.length - 1))
    const backgroundImagePick = Math.ceil(Math.random() * 4)

    setbackgroundImage(backgroundImagePick)
    setPhrase(phrases[phrasePick])
  }

  return (
    <>
      <main>
        <img src={`/fondo${backgroundImage}.png`} alt='Imágen de fondo' className='background-image' />
        <div className='title-container'>
          <Title />
        </div>
        <Phrase phrase={phrase} />
        <div className='button-container'>
          <Button handleClick={handleClick} />
        </div>
      </main>

    </>
  )
}

export default App

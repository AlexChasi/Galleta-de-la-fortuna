import './phrase.css'

export function Phrase ({ phrase }) {
  return <section className='phrase'>
    <p>{phrase.phrase}</p>
    <span>{phrase.author}</span>
  </section>
}
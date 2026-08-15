import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Reveal from '../Reveal'
import heroPhoto from '../../assets/sejaconcessionario/hero-loja-leva.webp'

const ESTADOS = [
  'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
  'SP', 'SE', 'TO',
]

export default function SejaConcessionarioHero() {
  const navigate = useNavigate()
  const [temExperiencia, setTemExperiencia] = useState('')

  // Sem recebedor configurado ainda — o formulário valida e "funciona" na
  // interface (navega até a página de agradecimento), mas não envia os
  // dados pra lugar nenhum até termos um destino real definido.
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/obrigado')
  }

  return (
    <section className="seja-hero">
      <img src={heroPhoto} alt="Showroom Ellev Mobility" className="seja-hero__img" />
      <div className="seja-hero__overlay" />

      <Reveal as="div" className="seja-hero__card">
        <Reveal as="h1" className="seja-hero__title" delay={150}>
          Faça parte do futuro da mobilidade elétrica.
        </Reveal>
        <Reveal as="p" className="seja-hero__text" delay={400}>
          A demanda por motos elétricas de alta qualidade, tecnologia e design só cresce no
          Brasil.
          <br />
          Com um pós-venda de qualidade, a ELLEV está se preparando para levar sua marca para
          todos os cantos do Brasil. Se você quer fazer parte do futuro da mobilidade elétrica,
          preencha o formulário:
        </Reveal>

        <form className="seja-hero__form" onSubmit={onSubmit}>
            <input type="text" name="nome" placeholder="Nome Completo" required />
            <input type="text" name="whatsapp" placeholder="Whatsapp" required />
            <input type="email" name="email" placeholder="E-mail" required />

            <div className="seja-hero__row">
              <select name="estado" defaultValue="" required>
                <option value="" disabled>
                  Estado
                </option>
                {ESTADOS.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
              <input type="text" name="cidade" placeholder="Cidade" required />
            </div>

            <div className="seja-hero__radio-group">
              <span className="seja-hero__radio-label">
                Possui experiência no segmento automotivo?
              </span>
              <label>
                <input
                  type="radio"
                  name="experiencia"
                  value="Sim"
                  checked={temExperiencia === 'Sim'}
                  onChange={() => setTemExperiencia('Sim')}
                  required
                />
                Sim
              </label>
              <label>
                <input
                  type="radio"
                  name="experiencia"
                  value="Não"
                  checked={temExperiencia === 'Não'}
                  onChange={() => setTemExperiencia('Não')}
                  required
                />
                Não
              </label>
            </div>

            {temExperiencia === 'Sim' && (
              <textarea name="se_sim_qual" placeholder="Se sim, qual?" rows={4} />
            )}

            <textarea name="mensagem" placeholder="Digite um mensagem" rows={4} required />

            <button type="submit" className="seja-hero__submit">
              ENVIAR
            </button>
        </form>
      </Reveal>
    </section>
  )
}

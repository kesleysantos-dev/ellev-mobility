import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Reveal from '../Reveal';
import heroPhoto from '../../assets/sejaconcessionario/hero-loja-leva.webp';

const ESTADOS = [
  'AC',
  'AL',
  'AP',
  'AM',
  'BA',
  'CE',
  'DF',
  'ES',
  'GO',
  'MA',
  'MT',
  'MS',
  'MG',
  'PA',
  'PB',
  'PR',
  'PE',
  'PI',
  'RJ',
  'RN',
  'RS',
  'RO',
  'RR',
  'SC',
  'SP',
  'SE',
  'TO',
];

// TODO: substituir pelo WhatsApp real da loja assim que for informado.
const WHATSAPP_NUMBER = '5500000000000';

export default function SejaConcessionarioHero() {
  const navigate = useNavigate();
  const [temExperiencia, setTemExperiencia] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);

    const linhas = [
      'Quero ser um concessionário Ellev Mobility',
      `Nome: ${data.get('nome')}`,
      `Whatsapp: ${data.get('whatsapp')}`,
      `E-mail: ${data.get('email')}`,
      `Estado: ${data.get('estado')}`,
      `Cidade: ${data.get('cidade')}`,
      `Possui experiência no segmento automotivo?: ${data.get('experiencia')}`,
    ];
    if (data.get('experiencia') === 'Sim' && data.get('se_sim_qual')) {
      linhas.push(`Qual experiência: ${data.get('se_sim_qual')}`);
    }
    linhas.push(`Mensagem: ${data.get('mensagem')}`);

    const texto = encodeURIComponent(linhas.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener,noreferrer');
    navigate('/obrigado');
  };

  return (
    <section className="seja-hero">
      <img
        src={heroPhoto}
        alt="Showroom Ellev Mobility"
        className="seja-hero__img"
      />
      <div className="seja-hero__overlay" />

      <Reveal as="div" className="seja-hero__card">
        <Reveal as="h1" className="seja-hero__title" delay={150}>
          LEVE A MOBILIDADE DO FUTURO PARA A SUA REGIÃO.
        </Reveal>
        <Reveal as="p" className="seja-hero__text" delay={400}>
          O mercado de mobilidade elétrica está avançando rapidamente no Brasil,
          criando novas oportunidades para quem deseja investir em um segmento
          moderno e em expansão.
          <br />
          A Ellev Mobility está construindo uma rede de parceiros para ampliar
          sua presença pelo país, oferecendo veículos elétricos, suporte
          comercial e uma experiência de pós-venda pensada para fortalecer cada
          operação. <br />
          Quer crescer junto com a Ellev? Preencha o formulário abaixo e dê o
          primeiro passo para fazer parte da nossa rede.
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

          <textarea
            name="mensagem"
            placeholder="Digite um mensagem"
            rows={4}
            required
          />

          <button type="submit" className="seja-hero__submit">
            ENVIAR
          </button>
        </form>
      </Reveal>
    </section>
  );
}

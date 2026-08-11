import { useMemo, useState } from 'react';
import Reveal from './Reveal';

const GAS_PRICE_PER_L = 6.1;
const GAS_KM_PER_L = 30;
const ENERGY_PRICE_PER_KWH = 0.75;
const ENERGY_KWH_PER_KM = 0.02;
const GAS_MAINTENANCE_RATE = 0.18;
const ELECTRIC_MAINTENANCE_RATE = 0.06;

function formatBRL(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function formatBRLShort(value) {
  return `R$ ${Math.round(value).toLocaleString('pt-BR')}`;
}

export default function SavingsCalculator() {
  const [kmPerDay, setKmPerDay] = useState(50);

  const calc = useMemo(() => {
    const gasUse = (kmPerDay / GAS_KM_PER_L) * GAS_PRICE_PER_L * 30;
    const gasMaintenance = gasUse * GAS_MAINTENANCE_RATE;
    const gasTotal = gasUse + gasMaintenance;

    const elecUse = kmPerDay * ENERGY_KWH_PER_KM * ENERGY_PRICE_PER_KWH * 30;
    const elecMaintenance = elecUse * ELECTRIC_MAINTENANCE_RATE;
    const elecTotal = elecUse + elecMaintenance;

    const monthlySavings = gasTotal - elecTotal;
    const annualSavings = monthlySavings * 12;

    return {
      gasUse,
      gasMaintenance,
      gasTotal,
      elecUse,
      elecMaintenance,
      elecEconomy: monthlySavings,
      monthlySavings,
      annualSavings,
    };
  }, [kmPerDay]);

  const max = calc.gasTotal || 1;
  const pct = (v) => `${Math.max((v / max) * 100, 0)}%`;
  const yTicks = [5, 4, 3, 2, 1, 0].map((step) => (max / 5) * step);
  const sliderMin = 15;
  const sliderMax = 100;
  const sliderPct = ((kmPerDay - sliderMin) / (sliderMax - sliderMin)) * 100;

  return (
    <section className="savings">
      <div className="container savings__grid">
        <Reveal as="div" className="savings__copy">
          <h2>
            Andar de ELLEV é mais dinheiro no seu
            <br />
            bolso.
          </h2>
          <p>
            Com o seu veículo elétrico, cada quilômetro é economia no seu bolso
            — veja na prática no simulador ao lado.
          </p>

          <span className="savings__stats-label">Sua economia</span>
          <div className="savings__stats">
            <div>
              <strong>{formatBRL(calc.annualSavings)}</strong>
              <span>Economia anual</span>
            </div>
            <div className="savings__stats-divider" />
            <div>
              <strong>{formatBRL(calc.monthlySavings)}</strong>
              <span>Economia mensal</span>
            </div>
          </div>

          <a href="#comprar" className="btn btn--primary savings__cta">
            Onde comprar
          </a>
        </Reveal>

        <Reveal as="div" className="savings__panel" delay={100}>
          <label htmlFor="km" className="savings__slider-label">
            Km rodados no dia <strong>{kmPerDay} km</strong>
          </label>
          <input
            id="km"
            type="range"
            min={sliderMin}
            max={sliderMax}
            step="1"
            value={kmPerDay}
            onChange={(e) => setKmPerDay(Number(e.target.value))}
            className="savings__slider"
            style={{
              background: `linear-gradient(to right, var(--accent-teal) ${sliderPct}%, #dcdcdc ${sliderPct}%)`,
            }}
          />
          <div className="savings__slider-scale">
            <span>15 Km</span>
            <span>100 Km</span>
          </div>
          <div className="savings__slider-value">
            <span>{kmPerDay}</span>
          </div>

          <div className="savings__chart">
            <div className="savings__y-axis">
              {yTicks.map((v, i) => (
                <span key={i}>{formatBRLShort(v)}</span>
              ))}
            </div>
            <div className="savings__plot">
              <div className="savings__gridlines">
                {yTicks.map((_, i) => (
                  <span key={i} />
                ))}
              </div>
              <div className="savings__bar-col">
                <div className="savings__bar">
                  <div
                    className="savings__seg savings__seg--use"
                    style={{ height: pct(calc.gasUse) }}
                  />
                  <div
                    className="savings__seg savings__seg--maintenance"
                    style={{ height: pct(calc.gasMaintenance) }}
                  />
                </div>
                <span className="savings__bar-label">Combustão</span>
              </div>
              <div className="savings__bar-col">
                <div className="savings__bar">
                  <div
                    className="savings__seg savings__seg--use"
                    style={{ height: pct(calc.elecUse) }}
                  />
                  <div
                    className="savings__seg savings__seg--maintenance"
                    style={{ height: pct(calc.elecMaintenance) }}
                  />
                  <div
                    className="savings__seg savings__seg--economy"
                    style={{ height: pct(calc.elecEconomy) }}
                  />
                </div>
                <span className="savings__bar-label">Moto elétrica</span>
              </div>
            </div>
          </div>

          <div className="savings__legend">
            <span>
              <i className="savings__dot savings__dot--use" />
              Custo de uso
            </span>
            <span>
              <i className="savings__dot savings__dot--maintenance" />
              Custo de manutenção
            </span>
            <span>
              <i className="savings__dot savings__dot--economy" />
              Economia
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

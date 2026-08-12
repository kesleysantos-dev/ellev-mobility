import modelo01 from '../assets/products/modelo-01.png';
import modelo02 from '../assets/products/modelo-02.png';
import modelo03 from '../assets/products/modelo-03.png';

export const products = [
  {
    id: 'modelo-01',
    name: 'EG1',
    tagline: 'Performance em duas rodas',
    photo: modelo01,
    specs: [
      { label: 'Vel. Máxima', value: '100km/h' },
      { label: 'Autonomia', value: 'até 130km' },
      { label: '0-50km/h', value: '2.9 seg' },
    ],
    cta: 'Explore a EG1',
  },
  {
    id: 'modelo-03',
    name: 'ES1',
    tagline: 'Liberdade para o dia a dia',
    photo: modelo03,
    specs: [
      { label: 'Bateria', value: 'Íon-Lítio' },
      { label: 'Autonomia', value: 'até 60 km' },
      { label: 'Documentação', value: 'sem CNH/Emplacamento' },
    ],
    cta: 'Explore a ES1',
  },
  {
    id: 'modelo-02',
    name: 'VIBE',
    tagline: 'Design vintage, tecnologia de ponta',
    photo: modelo02,
    specs: [
      { label: 'Vel. Máxima', value: '100km/h' },
      { label: 'Autonomia', value: 'até 100km' },
      { label: 'Motor', value: '9.000 W' },
    ],
    cta: 'Explore a VIBE',
  },
];

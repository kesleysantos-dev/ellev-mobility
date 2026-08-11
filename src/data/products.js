import modelo01 from '../assets/products/modelo-01.png'
import modelo02 from '../assets/products/modelo-02.png'
import modelo03 from '../assets/products/modelo-03.png'

export const products = [
  {
    id: 'modelo-01',
    name: 'MODELO 01',
    tagline: 'Performance em duas rodas',
    photo: modelo01,
    specs: [
      { label: 'Vel. Máxima', value: '100km/h' },
      { label: 'Autonomia', value: 'até 130km' },
      { label: '0-50km/h', value: '2.9 seg' },
    ],
    cta: 'Explore o Modelo 01',
  },
  {
    id: 'modelo-03',
    name: 'MODELO 02',
    tagline: 'Liberdade para o dia a dia',
    photo: modelo03,
    specs: [
      { label: 'Bateria', value: 'Íon-Lítio' },
      { label: 'Autonomia', value: 'até 60 km' },
      { label: 'Documentação', value: 'sem CNH nem placa' },
    ],
    cta: 'Explore o Modelo 02',
  },
  {
    id: 'modelo-02',
    name: 'MODELO 03',
    tagline: 'Design vintage, tecnologia de ponta',
    photo: modelo02,
    specs: [
      { label: 'Vel. Máxima', value: '100km/h' },
      { label: 'Autonomia', value: 'até 100km' },
      { label: 'Motor', value: '9.000 W' },
    ],
    cta: 'Explore o Modelo 03',
  },
]

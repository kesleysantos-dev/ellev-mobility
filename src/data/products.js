import urbanPhoto from '../assets/categorias-produtos/linha urban/URBAN.PNG';
import i5JoyPhoto from '../assets/categorias-produtos/linha urban/I5 JOY.PNG';
import x13Photo from '../assets/categorias-produtos/linha-adventure/X13.PNG';

export const products = [
  {
    id: 'modelo-01',
    name: 'URBAN',
    tagline: 'Agilidade elétrica para o seu dia a dia',
    photo: urbanPhoto,
    link: '/urban',
    specs: [
      { label: 'Vel. Máxima', value: '32km/h' },
      { label: 'Autonomia', value: 'até 65km' },
      { label: 'Carga Máxima', value: '150kg' },
    ],
    cta: 'Explore a URBAN',
  },
  {
    id: 'modelo-03',
    name: 'I5 JOY',
    tagline: 'Leveza e praticidade em cada trajeto',
    photo: i5JoyPhoto,
    link: '/i5-joy',
    specs: [
      { label: 'Bateria', value: 'Íon-Lítio' },
      { label: 'Autonomia', value: 'até 60 km' },
      { label: 'Vel. Máxima', value: '32km/h' },
    ],
    cta: 'Explore a I5 JOY',
  },
  {
    id: 'modelo-02',
    name: 'X13',
    tagline: 'Estilo retrô, força elétrica',
    photo: x13Photo,
    link: '/x13',
    specs: [
      { label: 'Vel. Máxima', value: '45km/h' },
      { label: 'Autonomia', value: 'até 80km' },
      { label: 'Carga Máxima', value: '180kg' },
    ],
    cta: 'Explore a X13',
  },
];

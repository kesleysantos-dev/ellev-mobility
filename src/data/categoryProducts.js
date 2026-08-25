import crossR from '../assets/categorias-produtos/linha cross/CROSS R.PNG'
import crossS from '../assets/categorias-produtos/linha cross/CROSS S.PNG'
import aionR from '../assets/categorias-produtos/linha city/AION R.PNG'
import aionS from '../assets/categorias-produtos/linha city/AION S.PNG'
import bizz from '../assets/categorias-produtos/linha urban/BIZZ.PNG'
import i5Joy from '../assets/categorias-produtos/linha urban/I5 JOY.PNG'
import neo from '../assets/categorias-produtos/linha urban/NEO.PNG'
import urban from '../assets/categorias-produtos/linha urban/URBAN.PNG'
import x12 from '../assets/categorias-produtos/linha-adventure/X12.PNG'
import x13 from '../assets/categorias-produtos/linha-adventure/X13.PNG'
import ev3 from '../assets/categorias-produtos/linha-triciclo/EV3.PNG'

// Especificações por produto, já organizadas nas mesmas seções do
// accordion da página (ver src/pages/CategoryProductPage.jsx). Seções sem
// dado correspondente pro produto caem no "Em breve" por padrão.
const specs = (rows) => rows.map(([label, value]) => ({ label, value }))

const I5_JOY_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
    ['Capacidade de Escalada', '25°'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 20AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '45 a 60 km'],
    ['Tempo de Recarga', '5–6 h'],
  ]),
  suspensao: specs([['Amortecimento', 'Hidráulicos']]),
  freios: specs([['Freios', 'À Disco']]),
  pneus: specs([
    ['Rodas', '60/100-10" pneu a vácuo Aro 10'],
    ['Calibragem', '33 psi'],
  ]),
  dimensoes: specs([
    ['Peso', '75,0 kg'],
    ['Carga Máxima', '150 kg'],
    ['Tamanho (C x L x A)', '174 cm x 63 cm x 109 cm'],
  ]),
}

const BIZZ_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '45 km/h'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 24AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '55 km'],
    ['Tempo de Recarga', '6 à 8 horas'],
  ]),
  suspensao: specs([
    ['Suspensão', 'Dianteira hidráulica / Traseira dupla mola'],
  ]),
  freios: specs([['Freios', 'Disco / Tambor']]),
  pneus: specs([['Rodas', 'Pneu aro 10']]),
  dimensoes: specs([
    ['Peso', '68 kg'],
    ['Carga Máxima', '180 kg'],
  ]),
  chassi: specs([
    ['Display', 'Painel digital LCD'],
    ['Funções', '3 velocidades, ré, alarme, buzina, seta e farol em LED'],
  ]),
}

const URBAN_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
    ['Capacidade de Escalada', '18°'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 24AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '65 km'],
    ['Tempo de Recarga', '8 horas'],
  ]),
  suspensao: specs([['Amortecimento', 'Hidráulico']]),
  freios: specs([['Freios', 'À disco hidráulicos']]),
  pneus: specs([
    ['Rodas', 'Pneus dianteira Aro 12 / traseira Aro 10'],
    ['Calibragem', '36 psi'],
  ]),
  dimensoes: specs([
    ['Peso', '78 kg'],
    ['Carga Máxima', '150 kg'],
    ['Tamanho (C x L x A)', '178,5 cm x 107 cm x 75 cm'],
  ]),
}

const X12_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 20AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '50 km'],
    ['Tempo de Recarga', '6 à 8 horas'],
  ]),
  freios: specs([['Freios', 'Disco / Tambor']]),
  pneus: specs([
    ['Rodas', 'Pneu aro 12'],
    ['Calibragem', '36 psi'],
  ]),
  dimensoes: specs([
    ['Peso', '80 kg'],
    ['Carga Máxima', '150 kg'],
  ]),
}

const AION_R_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
    ['Capacidade de Escalada', '12°'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '48V 24AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '48 km'],
    ['Tempo de Recarga', '8 horas'],
  ]),
  suspensao: specs([['Amortecimento', 'De mola']]),
  freios: specs([['Freios', 'À tambor']]),
  pneus: specs([
    ['Rodas', 'Pneu aro 10'],
    ['Calibragem', '36 psi'],
  ]),
  dimensoes: specs([
    ['Peso', '56 kg'],
    ['Carga Máxima', '150 kg'],
    ['Tamanho (C x L x A)', '153 cm x 65 cm x 104 cm'],
  ]),
}

const NEO_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
  ]),
  bateria: specs([
    ['Bateria', '60V / 40Ah* (configuração pode variar conforme a versão)'],
    ['Autonomia', '40 a 60 km (até 80 km dependendo da bateria)'],
    ['Tempo de Recarga', '5 a 8 horas'],
  ]),
  freios: specs([['Freios', 'Disco / Disco']]),
  pneus: specs([['Pneus', '3.00-10']]),
  dimensoes: specs([
    ['Peso', '85 kg'],
    ['Carga Máxima', '180 kg'],
  ]),
}

const EV3_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '32 km/h'],
    ['Capacidade de Escalada', '35°'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 24AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '55 km'],
    ['Tempo de Recarga', '6 a 8 horas'],
  ]),
  suspensao: specs([['Amortecimento', 'Hidráulico']]),
  freios: specs([['Freios', 'Dianteiro à disco / Traseiro cubo']]),
  pneus: specs([
    ['Rodas', 'Pneu aro 10'],
    ['Calibragem', '36 psi'],
  ]),
  dimensoes: specs([
    ['Peso', '90 kg'],
    ['Carga Máxima', '186 kg'],
    ['Tamanho (C x L x A)', '154 cm x 73 cm x 107 cm'],
  ]),
}

const X13_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '45 km/h'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 20AH'],
    ['Bateria', 'Chumbo-Ácido Selada'],
    ['Autonomia', '80 km'],
    ['Tempo de Recarga', '6 à 8 horas'],
  ]),
  suspensao: specs([
    ['Suspensão', 'Dianteira hidráulica / Traseira dupla mola'],
  ]),
  freios: specs([['Freios', 'Disco / Tambor']]),
  pneus: specs([['Rodas', 'Pneu aro 14']]),
  dimensoes: specs([
    ['Peso', '84 kg'],
    ['Carga Máxima', '180 kg'],
  ]),
  chassi: specs([
    ['Display', 'Painel digital LCD'],
    ['Funções', '3 velocidades, ré, alarme, buzina, seta e farol em LED'],
  ]),
}

const CROSS_R_SPECS = {
  motor: specs([
    ['Potência', '750 W brushless (pico de até 1.000W)'],
    ['Velocidade Máxima', '32 km/h (limitada)'],
    ['Capacidade de Escalada', 'até 20°'],
  ]),
  bateria: specs([
    ['Bateria', 'Lítio removível 48V / 15Ah'],
    ['Autonomia', 'aproximadamente 45 a 60 km'],
    ['Tempo de Recarga', '7 a 8 horas'],
  ]),
  suspensao: specs([
    ['Suspensão', 'Hidráulica dianteira + amortecedor traseiro'],
  ]),
  freios: specs([['Freios', 'Disco hidráulico dianteiro e traseiro']]),
  pneus: specs([['Pneus', '20 x 4.0" largos/off-road']]),
  dimensoes: specs([
    ['Peso', 'aproximadamente 39 kg'],
    ['Carga Máxima', '150 kg'],
  ]),
}

const CROSS_S_SPECS = {
  motor: specs([
    ['Potência', '1.000 W'],
    ['Velocidade Máxima', 'até 32 km/h'],
  ]),
  bateria: specs([
    ['Bateria', 'Lítio removível 60V / 20Ah'],
    ['Autonomia', 'aproximadamente 50 a 60 km'],
    ['Carregamento', 'Tomada convencional'],
  ]),
  suspensao: specs([
    ['Suspensão', 'Dianteira hidráulica + amortecedores traseiros'],
  ]),
  freios: specs([['Freios', 'Disco dianteiro e traseiro']]),
  pneus: specs([['Pneus', 'Tubeless']]),
}

const AION_S_SPECS = {
  motor: specs([
    ['Potência', '1000W'],
    ['Velocidade Máxima', '45 km/h'],
  ]),
  bateria: specs([
    ['Capacidade da Bateria', '60V 24AH'],
    ['Bateria', 'Lítio Removível'],
    ['Autonomia', '55 km'],
    ['Tempo de Recarga', '6 à 8 horas'],
  ]),
  freios: specs([['Freios', 'Disco / Tambor']]),
  pneus: specs([
    ['Rodas', 'Pneu aro 10'],
    ['Calibragem', '36 psi'],
  ]),
  dimensoes: specs([['Peso', '68 kg']]),
}

// Cada produto ganha automaticamente uma página simples em /moto/:id
// (ver src/pages/CategoryProductPage.jsx). Alguns produtos de categoria são
// os MESMOS produtos que aparecem em "Destaques" (com página própria, mais
// completa) — nesses casos o link deve apontar pra página de destaque, não
// pra página simples, senão o mesmo produto levaria a duas páginas
// diferentes dependendo de onde foi clicado.
const DESTAQUE_LINKS = {
  urban: '/urban',
  'i5-joy': '/i5-joy',
  x13: '/x13',
}

export const CATEGORY_PRODUCTS = [
  {
    id: 'categoria-1',
    label: 'LINHA CROSS',
    products: [
      { id: 'cross-r', name: 'CROSS R', photo: crossR, specs: CROSS_R_SPECS },
      { id: 'cross-s', name: 'CROSS S', photo: crossS, specs: CROSS_S_SPECS },
    ],
  },
  {
    id: 'categoria-2',
    label: 'LINHA CITY',
    products: [
      { id: 'aion-r', name: 'AION R', photo: aionR, specs: AION_R_SPECS },
      { id: 'aion-s', name: 'AION S', photo: aionS, specs: AION_S_SPECS },
    ],
  },
  {
    id: 'categoria-3',
    label: 'LINHA URBAN',
    products: [
      { id: 'bizz', name: 'BIZZ', photo: bizz, specs: BIZZ_SPECS },
      { id: 'i5-joy', name: 'I5 JOY', photo: i5Joy, specs: I5_JOY_SPECS },
      { id: 'neo', name: 'NEO', photo: neo, specs: NEO_SPECS },
      { id: 'urban', name: 'URBAN', photo: urban, specs: URBAN_SPECS },
    ],
  },
  {
    id: 'categoria-4',
    label: 'LINHA - ADVENTURE',
    products: [
      { id: 'x12', name: 'X12', photo: x12, specs: X12_SPECS },
      { id: 'x13', name: 'X13', photo: x13, specs: X13_SPECS },
    ],
  },
  {
    id: 'categoria-5',
    label: 'LINHA - TRICICLO',
    products: [{ id: 'ev3', name: 'EV3', photo: ev3, specs: EV3_SPECS }],
  },
].map((category) => ({
  ...category,
  products: category.products.map((p) => ({
    ...p,
    link: DESTAQUE_LINKS[p.id] ?? `/moto/${p.id}`,
  })),
}))

export const CATEGORY_PRODUCT_MAP = Object.fromEntries(
  CATEGORY_PRODUCTS.flatMap((c) => c.products.map((p) => [p.id, p])),
)

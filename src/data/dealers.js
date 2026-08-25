export const dealers = [
  {
    city: 'Fortaleza',
    state: 'Ceará',
    name: 'Ellev Mobility',
    address: 'Loja 4 Av. Alberto Magno, 1008 Bairro Montese – CEP: 60.410-225',
    mapAddress: 'R. Alberto Magno, 1008 - Montese, Fortaleza - CE',
  },
  {
    city: 'Sobral',
    state: 'Ceará',
    name: 'Ellev Mobility',
    address: 'Rua Dr. Figueiredo,351 – centro – CEP: 62.011-270',
    mapAddress: 'R. Dr. Figueiredo Rodrigues, 351 - Centro, Sobral - CE',
  },
];

export const dealerStates = [...new Set(dealers.map((d) => d.state))].sort();

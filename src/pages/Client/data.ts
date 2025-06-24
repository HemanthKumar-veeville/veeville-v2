import { API_BASE_URL } from '../Work/constants';

export interface ClientData {
  id: string;
  name: string;
  logo: string;
  category: string;
}

export const clientCategories = [
  'All',
  'Retail',
  'Banking & Finance',
  'FMCG',
  'Pharmaceuticals',
  'Oil & Gas',
  'Automotive',
  'Healthcare',
  'IT',
  'Education',
  'Food & Beverage'
];

export const clientsData: ClientData[] = [
  {
    id: 'pepsico',
    name: 'PepsiCo',
    logo: `${API_BASE_URL}/uploads/clients/pepsico.png`,
    category: 'FMCG'
  },
  {
    id: 'bp',
    name: 'BP',
    logo: `${API_BASE_URL}/uploads/clients/bp.png`,
    category: 'Oil & Gas'
  },
  {
    id: 'levis',
    name: 'Levi\'s',
    logo: `${API_BASE_URL}/uploads/clients/levis.png`,
    category: 'Retail'
  },
  {
    id: 'sap',
    name: 'SAP',
    logo: `${API_BASE_URL}/uploads/clients/sap.png`,
    category: 'IT'
  },
  {
    id: 'drreddys',
    name: 'Dr. Reddy\'s',
    logo: `${API_BASE_URL}/uploads/clients/drreddys.png`,
    category: 'Pharmaceuticals'
  },
  {
    id: 'gehealthcare',
    name: 'GE Healthcare',
    logo: `${API_BASE_URL}/uploads/clients/gehealthcare.png`,
    category: 'Healthcare'
  },
  {
    id: 'quaker',
    name: 'Quaker',
    logo: `${API_BASE_URL}/uploads/clients/quaker.png`,
    category: 'Food & Beverage'
  },
  {
    id: 'canara',
    name: 'Canara Bank',
    logo: `${API_BASE_URL}/uploads/clients/canara.png`,
    category: 'Banking & Finance'
  },
  {
    id: 'lam',
    name: 'Lam Research',
    logo: `${API_BASE_URL}/uploads/clients/lam.png`,
    category: 'IT'
  },
  {
    id: 'epam',
    name: 'EPAM',
    logo: `${API_BASE_URL}/uploads/clients/epam.png`,
    category: 'IT'
  },
  {
    id: 'fidelity',
    name: 'Fidelity',
    logo: `${API_BASE_URL}/uploads/clients/fidelity.png`,
    category: 'Banking & Finance'
  },
  {
    id: 'springer',
    name: 'Springer Nature',
    logo: `${API_BASE_URL}/uploads/clients/springer.png`,
    category: 'Education'
  },
  {
    id: 'ola',
    name: 'OLA',
    logo: `${API_BASE_URL}/uploads/clients/ola.png`,
    category: 'Automotive'
  },
  {
    id: 'kyndryl',
    name: 'Kyndryl',
    logo: `${API_BASE_URL}/uploads/clients/kyndryl.png`,
    category: 'IT'
  },
  {
    id: 'tvs',
    name: 'TVS',
    logo: `${API_BASE_URL}/uploads/clients/tvs.png`,
    category: 'Automotive'
  },
  {
    id: 'kpmg',
    name: 'KPMG',
    logo: `${API_BASE_URL}/uploads/clients/kpmg.png`,
    category: 'Banking & Finance'
  },
  {
    id: 'titan',
    name: 'Titan',
    logo: `${API_BASE_URL}/uploads/clients/titan.png`,
    category: 'Retail'
  },
  {
    id: 'gsk',
    name: 'GSK',
    logo: `${API_BASE_URL}/uploads/clients/gsk.png`,
    category: 'Pharmaceuticals'
  },
  {
    id: 'shell',
    name: 'Shell',
    logo: `${API_BASE_URL}/uploads/clients/shell.png`,
    category: 'Oil & Gas'
  },
  {
    id: 'hsbc',
    name: 'HSBC',
    logo: `${API_BASE_URL}/uploads/clients/hsbc.png`,
    category: 'Banking & Finance'
  }
]; 
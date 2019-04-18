import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-e-commerce',
    link: '/pages/dashboard',
    home: true,
  },  
  {
    title: 'FEATURES',
    group: true,
  },  
  // {
  //   title: 'Charts',
  //   icon: 'nb-bar-chart',
  //   children: [
  //     {
  //       title: 'Echarts',
  //       link: '/pages/charts/echarts',
  //     },
  //     {
  //       title: 'Charts.js',
  //       link: '/pages/charts/chartjs',
  //     },
  //     {
  //       title: 'D3',
  //       link: '/pages/charts/d3',
  //     },
  //   ],
  // },
  {
    title: 'Consult Fitness Experts',
    icon: 'nb-person',
    children: [
      {
        title: 'Physiotherapist',
        link: '',
      },
      {
        title: 'Dietician',
        link: '',
      },
    ],
  },
  {
    title: 'Fitness Partners',
    icon: 'nb-heart',
    children: [
      {
        title: 'Golds Gym',
        link: '',
      },
      {
        title: 'Signature',
        link: '',
      },
      {
        title:'Fitternity',
        link:''
      }
    ],
  },
  {
    title: 'Diet Chart',
    icon: 'nb-bar-chart',
    link:''
  },
  {
    title: 'Membership',
    icon: 'nb-edit',
    link:''
  },
  {
    title: 'FAQ',
    icon: 'nb-help',
    link:''
  },
  {
    title: 'Contact US',
    icon: 'nb-keypad',
    link:''
  },
  {
    title: 'Careers',
    icon: 'nb-star',
    link:''
  },

];

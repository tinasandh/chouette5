
export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Kreditkort',
      url: '/creditcard',
      icon: 'icon-credit-card',
      children: [
          {
              name: 'Prövning',
              url: '/creditcard/referral',
              icon: 'icon-arrow-right'
          },
          {
              name: 'Beviljade',
              url: '/creditcard/approved',
              icon: 'icon-arrow-right'
          },
          {
              name: 'Avslagna',
              url: '/creditcard/declined',
              icon: 'icon-arrow-right'
          },
          {
              name: 'Historik',
              url: '/creditcard/history',
              icon: 'icon-arrow-right'
          }
      ]
  }
  ]
};

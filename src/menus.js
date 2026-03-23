const assetsPath = '../assets/'

const menus = {
  home: [
    {
      title: 'Bank',
      icon: require(`${assetsPath}home/bank.png`),
      navScreen: 'Menu',
      navParams: { screenTitle: 'Bank', menu: 'bank' },
      newScreen: false
    },
    {
      title: 'Credit Card',
      icon: require(`${assetsPath}home/credit-card.png`),
      navScreen: 'Menu',
      navParams: { screenTitle: 'Credit Card', menu: 'creditCard' },
      newScreen: false
    },
    {
      title: 'Stock',
      icon: require(`${assetsPath}home/stock.png`),
      navScreen: 'Menu',
      navParams: { screenTitle: 'Stock', menu: 'stock' },
      newScreen: false
    },
    {
      title: 'Mutual Fund',
      icon: require(`${assetsPath}home/mutual-fund.png`),
      navScreen: 'Menu',
      navParams: { screenTitle: 'Mutual Fund', menu: 'mutualFund' },
      newScreen: false
    },
    {
      title: 'Misc',
      icon: require(`${assetsPath}home/misc.png`),
      navScreen: 'Menu',
      navParams: { screenTitle: 'Misc', menu: 'misc' },
      newScreen: false
    }
  ],

  bank: [
    {
      title: 'Add Bank',
      icon: require(`${assetsPath}bank/add-bank.png`),
      navScreen: 'AddCategory',
      navParams: { screenTitle: 'Add Bank', path: 'bank/bank' },
      newScreen: true 
    }
  ],

  creditCard: [
    {
      title: 'Add Credit Card',
      icon: require(`${assetsPath}credit-card/add-credit-card.png`),
      navScreen: 'AddCategory',
      navParams: { screenTitle: 'Add Credit Card', path: 'creditcard/creditcard' },
      newScreen: true 
    }
  ],

  stock: [
    {
      title: 'Add Stock',
      icon: require(`${assetsPath}stock/add-stock.png`),
      navScreen: 'AddCategory',
      navParams: { screenTitle: 'Add Stock', path: 'stock/stock' },
      newScreen: true 
    }
  ],

  mutualFund: [
    {
      title: 'Add Mutual Fund',
      icon: require(`${assetsPath}mutual-fund/add-mutual-fund.png`),
      navScreen: 'AddCategory',
      navParams: { screenTitle: 'Add Mutual Fund', path: 'mutualfund/mutualfund' },
      newScreen: true 
    }
  ],

  misc: [
    {
      title: 'Add Misc Category',
      icon: require(`${assetsPath}misc/add-misc-category.png`),
      navScreen: 'AddCategory',
      navParams: { screenTitle: 'Add Misc Category', path: 'misccategory/misccategory' },
      newScreen: true 
    }
  ]
}

export default menus

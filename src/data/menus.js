const assetsPath = '../../assets/'

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
      title: 'Add Transaction',
      icon: require(`${assetsPath}bank/add-transaction.png`),
      navScreen: 'EditTransaction',
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'bank/transaction', categoriesPath: 'bank/banks' },
      newScreen: true 
    },
    {
      title: 'Banks',
      icon: require(`${assetsPath}bank/banks.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Banks', path: 'bank/banks',
        updateInfo: { screenTitle: 'Update Bank', method: 'PUT', path: 'bank/bank', deletePath: 'bank/bank' }
      },
      newScreen: true 
    },
    {
      title: 'Add Bank',
      icon: require(`${assetsPath}bank/add-bank.png`),
      navScreen: 'EditCategory',
      navParams: { screenTitle: 'Add Bank', method: 'POST', path: 'bank/bank' },
      newScreen: true 
    }
  ],

  creditCard: [
    {
      title: 'Add Transaction',
      icon: require(`${assetsPath}credit-card/add-transaction.png`),
      navScreen: 'EditTransaction',
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'creditcard/transaction', categoriesPath: 'creditcard/creditcards' },
      newScreen: true 
    },
    {
      title: 'Credit Cards',
      icon: require(`${assetsPath}credit-card/credit-cards.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Credit Cards', path: 'creditcard/creditcards',
        updateInfo: { screenTitle: 'Update Credit Card', method: 'PUT', path: 'creditcard/creditcard', deletePath: 'creditcard/creditcard' }
      },
      newScreen: true 
    },
    {
      title: 'Add Credit Card',
      icon: require(`${assetsPath}credit-card/add-credit-card.png`),
      navScreen: 'EditCategory',
      navParams: { screenTitle: 'Add Credit Card', method: 'POST', path: 'creditcard/creditcard' },
      newScreen: true 
    }
  ],

  stock: [
    {
      title: 'Add Transaction',
      icon: require(`${assetsPath}stock/add-transaction.png`),
      navScreen: 'EditTransaction',
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'stock/transaction', categoriesPath: 'stock/stocks' },
      newScreen: true 
    },
    {
      title: 'Stocks',
      icon: require(`${assetsPath}stock/stocks.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Stocks', path: 'stock/stocks',
        updateInfo: { screenTitle: 'Update Stock', method: 'PUT', path: 'stock/stock', deletePath: 'stock/stock' }
      },
      newScreen: true 
    },
    {
      title: 'Add Stock',
      icon: require(`${assetsPath}stock/add-stock.png`),
      navScreen: 'EditCategory',
      navParams: { screenTitle: 'Add Stock', method: 'POST', path: 'stock/stock' },
      newScreen: true 
    }
  ],

  mutualFund: [
    {
      title: 'Add Transaction',
      icon: require(`${assetsPath}mutual-fund/add-transaction.png`),
      navScreen: 'EditTransaction',
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'mutualfund/transaction', categoriesPath: 'mutualfund/mutualfunds' },
      newScreen: true 
    },
    {
      title: 'Mutual Funds',
      icon: require(`${assetsPath}mutual-fund/mutual-funds.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Mutual Funds', path: 'mutualfund/mutualfunds',
        updateInfo: { screenTitle: 'Update Mutual Fund', method: 'PUT', path: 'mutualfund/mutualfund', deletePath: 'mutualfund/mutualfund' }
      },
      newScreen: true 
    },
    {
      title: 'Add Mutual Fund',
      icon: require(`${assetsPath}mutual-fund/add-mutual-fund.png`),
      navScreen: 'EditCategory',
      navParams: { screenTitle: 'Add Mutual Fund', method: 'POST', path: 'mutualfund/mutualfund' },
      newScreen: true 
    }
  ],

  misc: [
    {
      title: 'Add Transaction',
      icon: require(`${assetsPath}misc/add-transaction.png`),
      navScreen: 'EditTransaction',
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'misc/transaction', categoriesPath: 'misc/misccategories' },
      newScreen: true 
    },
    {
      title: 'Misc Categories',
      icon: require(`${assetsPath}misc/misc-categories.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Misc Categories', path: 'misc/misccategories',
        updateInfo: { screenTitle: 'Update Misc Category', method: 'PUT', path: 'misc/misccategory', deletePath: 'misc/misccategory' }
      },
      newScreen: true 
    },
    {
      title: 'Add Misc Category',
      icon: require(`${assetsPath}misc/add-misc-category.png`),
      navScreen: 'EditCategory',
      navParams: { screenTitle: 'Add Misc Category', method: 'POST', path: 'misc/misccategory' },
      newScreen: true 
    }
  ]
}

export default menus

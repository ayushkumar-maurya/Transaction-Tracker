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
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'bank/transaction',
        categoriesInfo: { parent: 'Bank', path: 'bank/banks' }
      },
      newScreen: true 
    },
    {
      title: 'Transactions',
      icon: require(`${assetsPath}bank/transactions.png`),
      navScreen: 'Transactions',
      navParams: { screenTitle: 'Transactions', path: 'bank/transactions',
        updateInfo: {
          screenTitle: 'Update Transaction', method: 'PUT', path: 'bank/transaction', deletePath: 'bank/transaction',
          categoriesInfo: { parent: 'Bank', path: 'bank/banks' }
        }
      },
      newScreen: true 
    },
    {
      title: 'Banks',
      icon: require(`${assetsPath}bank/banks.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Banks', path: 'bank/amounts',
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
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'creditcard/transaction',
        categoriesInfo: { parent: 'Credit Card', path: 'creditcard/creditcards' }
      },
      newScreen: true 
    },
    {
      title: 'Transactions',
      icon: require(`${assetsPath}credit-card/transactions.png`),
      navScreen: 'Transactions',
      navParams: { screenTitle: 'Transactions', path: 'creditcard/transactions',
        updateInfo: {
          screenTitle: 'Update Transaction', method: 'PUT', path: 'creditcard/transaction', deletePath: 'creditcard/transaction',
          categoriesInfo: { parent: 'Credit Card', path: 'creditcard/creditcards' }
        }
      },
      newScreen: true 
    },
    {
      title: 'Credit Cards',
      icon: require(`${assetsPath}credit-card/credit-cards.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Credit Cards', path: 'creditcard/amounts',
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
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'stock/transaction',
        categoriesInfo: { parent: 'Stock', path: 'stock/stocks' }
      },
      newScreen: true 
    },
    {
      title: 'Transactions',
      icon: require(`${assetsPath}stock/transactions.png`),
      navScreen: 'Transactions',
      navParams: { screenTitle: 'Transactions', path: 'stock/transactions',
        updateInfo: {
          screenTitle: 'Update Transaction', method: 'PUT', path: 'stock/transaction', deletePath: 'stock/transaction',
          categoriesInfo: { parent: 'Stock', path: 'stock/stocks' }
        }
      },
      newScreen: true 
    },
    {
      title: 'Stocks',
      icon: require(`${assetsPath}stock/stocks.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Stocks', path: 'stock/amounts',
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
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'mutualfund/transaction',
        categoriesInfo: { parent: 'Mutual Fund', path: 'mutualfund/mutualfunds' }
      },
      newScreen: true 
    },
    {
      title: 'Transactions',
      icon: require(`${assetsPath}mutual-fund/transactions.png`),
      navScreen: 'Transactions',
      navParams: { screenTitle: 'Transactions', path: 'mutualfund/transactions',
        updateInfo: {
          screenTitle: 'Update Transaction', method: 'PUT', path: 'mutualfund/transaction', deletePath: 'mutualfund/transaction',
          categoriesInfo: { parent: 'Mutual Fund', path: 'mutualfund/mutualfunds' }
        }
      },
      newScreen: true 
    },
    {
      title: 'Mutual Funds',
      icon: require(`${assetsPath}mutual-fund/mutual-funds.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Mutual Funds', path: 'mutualfund/amounts',
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
      navParams: { screenTitle: 'Add Transaction', method: 'POST', path: 'misc/transaction',
        categoriesInfo: { parent: 'Misc Category', path: 'misc/misccategories' }
      },
      newScreen: true 
    },
    {
      title: 'Transactions',
      icon: require(`${assetsPath}misc/transactions.png`),
      navScreen: 'Transactions',
      navParams: { screenTitle: 'Transactions', path: 'misc/transactions',
        updateInfo: {
          screenTitle: 'Update Transaction', method: 'PUT', path: 'misc/transaction', deletePath: 'misc/transaction',
          categoriesInfo: { parent: 'Misc Category', path: 'misc/misccategories' }
        }
      },
      newScreen: true 
    },
    {
      title: 'Misc Categories',
      icon: require(`${assetsPath}misc/misc-categories.png`),
      navScreen: 'Categories',
      navParams: { screenTitle: 'Misc Categories', path: 'misc/amounts',
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

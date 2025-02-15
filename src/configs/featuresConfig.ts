export let featuresConfig = {
  style: {
    section: {
      margin: "0 0 100px 0"
    },
    icons: {
      fontSize: '3rem',
      padding: '0',
    },
    buttons: {
      padding: '0',
    },
  },

  cards: [
    {
      text: 'Расклад на любовь',
      description: 'Описание преимуществ расклада на любовь',
      icon: 'heart-half',
      button: {
        color: 'link', // За счет color меняется тип кнопки (link, primary и т.д.)
        href: '#',
        text: 'Заказать расклад на любовь',
      },
    },
    {
      text: 'Расклад на деньги',
      description: 'Описание преимуществ расклада на деньги',
      icon: 'currency-bitcoin',
      button: {
        color: 'link',
        href: '#',
        text: 'Заказать расклад на деньги',
      },
    },
    {
      text: 'Расклад на любовь',
      description: 'Описание преимуществ расклада на любовь',
      icon: 'heart-half',
      button: {
        color: 'link', // За счет color меняется тип кнопки (link, primary и т.д.)
        href: '#',
        text: 'Заказать расклад на любовь',
      },
    },
    {
      text: 'Расклад на деньги',
      description: 'Описание преимуществ расклада на деньги',
      icon: 'currency-bitcoin',
      button: {
        color: 'link',
        href: '#',
        text: 'Заказать расклад на деньги',
      },
    },

  ],
}

export type FeaturesConfigT = typeof featuresConfig

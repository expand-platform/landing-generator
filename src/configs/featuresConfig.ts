export let featuresConfig = {
  style: {
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
      text: 'This is text for card 1',
      description: 'Description 1',
      icon: '1-circle-fill',
      button: {
        color: 'link', // За счет color меняется тип кнопки (link, primary и т.д.)
        href: '#',
        text: 'Button 1',
      },
    },
    {
      text: 'This is text for card 2',
      description: 'Description 2',
      icon: '2-circle-fill',
      button: {
        color: 'link',
        href: '#',
        text: 'Button 2',
      },
    },
    {
      text: 'This is text for card 3',
      description: 'Description 3',
      icon: '3-circle-fill',
      button: {
        color: 'link',
        href: '#',
        text: 'Button 3',
      },
    },
    {
      text: 'This is text for card 4',
      description: 'Description 4',
      icon: '4-circle-fill',
      button: {
        color: 'link',
        href: '#',
        text: 'Button 4',
      },
    },
  ],
}

export type FeaturesConfigT = typeof featuresConfig

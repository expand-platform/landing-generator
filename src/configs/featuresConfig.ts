export let featuresConfig = {
  title: "Расклады на все жизненные ситуации",


  style: {
    section: {
      margin: "0 0 100px 0"
    },
    title: {
      fontSize: "2rem",
      margin: "0 0 75px 0"
    },
    images: {
      maxHeight: "259px", // когда одна из картинок вылазит по высоте, обрезаем её
    },
    icons: {
      fontSize: "5rem",
      padding: "0",
      color: "red"
    },
    buttons: {
      padding: "0",
    },
  },

  cards: [
    {
      text: "Расклад на любовь",
      description: "Описание преимуществ расклада на любовь",
      image: "/img/square/taro-1.jpg", // false or image url (string)
      icon: false, // false or bs-icon name (string)
      button: {
        color: "link", // За счет color меняется тип кнопки (link, primary и т.д.)
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на любовь",
      },
    },
    {
      text: "Расклад на деньги",
      description: "Описание преимуществ расклада на деньги",
      image: "/img/square/taro-2.jpg",
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на деньги",
      },
    },
    {
      text: "Расклад на семью",
      description: "Описание преимуществ расклада на семью",
      image: "/img/square/taro-3.jpg",
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на семью",
      },
    },
    {
      text: "Личный расклад на год",
      description: "Описание преимуществ расклада на год",
      image: "/img/square/taro-4.jpg",
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на год",
      },
    },

  ],
}

export type FeaturesConfigT = typeof featuresConfig

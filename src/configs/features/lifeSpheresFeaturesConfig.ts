import { featureStyles } from "./featureStyles"

const featuresImgPath = "/img/features"
const telegramAccountLink = "https://t.me/best_prepod"


export let lifeSpheresfeaturesConfig = {
  title: "Расклады на все жизненные ситуации",
  subtitle: ["Любовь, деньги, судьба...", "Какую часть жизни вы хотите сделать лучше?"],
  style: featureStyles,

  /*
    image: false or image url (string)
    icon: // false or bs-icon name (string)
    button-color: За счет color меняется тип кнопки (link, primary и т.д.)
  */

  cards: [
    {
      text: "Расклад на любовь",
      description: "Описание преимуществ расклада на любовь",
      image: `${featuresImgPath}/1.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на любовь",
      },
    },
    {
      text: "Расклад на деньги",
      description: "Описание преимуществ расклада на деньги",
      image: `${featuresImgPath}/2.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на деньги",
      },
    },
    {
      text: "Расклад на семью",
      description: "Описание преимуществ расклада на семью",
      image: `${featuresImgPath}/3.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на семью",
      },
    },
    {
      text: "Личный расклад на год",
      description: "Описание преимуществ расклада на год",
      image: `${featuresImgPath}/4.jpg`,
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на год",
      },
    },
    {
      text: "Личный расклад на год",
      description: "Описание преимуществ расклада на год",
      image: `${featuresImgPath}/5.jpg`,
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на год",
      },
    },
    {
      text: "Личный расклад на год",
      description: "Описание преимуществ расклада на год",
      image: `${featuresImgPath}/6.jpg`,
      icon: false,
      button: {
        color: "link",
        href: "https://t.me/best_prepod",
        text: "Заказать расклад на год",
      },
    },

  ],
}

export type FeaturesConfigT = typeof lifeSpheresfeaturesConfig

import { featureStyles } from "./featureStyles"

const featuresImgPath = "/img/features"
const telegramAccountLink = "https://t.me/best_prepod"


export let timeframesFeaturesConfig = {
  title: "Выбор времени — лучшего для вашей жизни",
  subtitle: ["Подбор оптимального времени для старта нового дела, поиска партнёра или отдыха.", "Выбор за вами"],
  style: featureStyles,

  /*
    image: false or image url (string)
    icon: // false or bs-icon name (string)
    button-color: За счет color меняется тип кнопки (link, primary и т.д.)
  */

  cards: [
    {
      text: "Расклад на неделю",
      description: "Описание преимуществ расклада на неделю",
      image: `${featuresImgPath}/6.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на неделю",
      },
    },
    {
      text: "Расклад на месяц",
      description: "Описание преимуществ расклада на месяц",
      image: `${featuresImgPath}/5.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на месяц",
      },
    },
    {
      text: "Расклад на год",
      description: "Описание преимуществ расклада на год",
      image: `${featuresImgPath}/4.jpg`,
      icon: false,
      button: {
        color: "link",
        href: telegramAccountLink,
        text: "Заказать расклад на год",
      },
    },
  ],
}

export type TimeframesFeaturesConfig = typeof timeframesFeaturesConfig

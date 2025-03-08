import { anchorLinks } from "@configs/common/anchorLinks"

export const navLinks = [
  {
    text: "Расклады таро",
    url: anchorLinks.prices.timeframes,
    active: true,
    dropdown: [
      {
        text: "Общий расклад на судьбу",
        url: anchorLinks.prices.lifeSpheres,
      },
      {
        text: "Финансы и благополучье",
        url: anchorLinks.prices.lifeSpheres,
      },
      {
        text: "Вторая половинка, любовь",
        url: anchorLinks.prices.lifeSpheres,
      },
      {
        text: "Карьера, поиск работы",
        url: anchorLinks.prices.lifeSpheres,
      },
      {
        text: "Семья, родные, здоровье",
        url: anchorLinks.prices.lifeSpheres,
      },
      {
        text: "Расклад на год",
        url: anchorLinks.prices.lifeSpheres,
      },
    ],
  },
  {
    text: "Судьбоносные камни",
    url: anchorLinks.prices.stones,
    active: true,
    dropdown: [
      {
        text: "Подобрать личный камень",
        url: anchorLinks.prices.stones,
      },
      {
        text: "Выбрать камень-оберег",
        url: anchorLinks.prices.stones,
      },
      {
        text: "Найти свой денежный камень",
        url: anchorLinks.prices.stones,
      },
      {
        text: "Выбрать камень здоровья",
        url: anchorLinks.prices.stones,
      },
      {
        text: "Выбрать камень любви",
        url: anchorLinks.prices.stones,
      },
    ],
  },
  {
    text: "Цены",
    url: anchorLinks.prices.all,
  },
  {
    text: "Контакты",
    url: anchorLinks.contacts,
  },
]

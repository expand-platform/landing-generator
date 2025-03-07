import { anchorLinks } from "@configs/common/anchorLinks"

export let lifeSpheresPricingConfig = {
  title: "Какие сферы жизни вам не безразличны?",
  subtitle: ["Личный расклад на неделю, месяц, год.", "Получите ответы на вопросы, которые вам не безразличны"],
  anchorLink: anchorLinks.prices.lifeSpheres.replace("#", ""),

  cards: [
    /* Временные */
    {
      title: "Расклад на любовь",
      price: "900 грн",
      advantages: ["Здравая оценка недели", "Разумное выставление приоритетов", "Возможность избежать глупых ошибок", "Понимание себя и окружающих"],
      buttonText: "Заказать расклад",
      link: "/",
    },
    {
      title: "Расклад на деньги",
      price: "1500 грн",
      advantages: ["Ставим чёткие приоритеты на месяц", "Здраво оцениваем свои силы", "Избавляемся от эмоциональных ошибок", "Обретаем внутреннюю гармонию"],
      buttonText: "Заказать расклад",
      link: "/",
    },
    {
      title: "Расклад на здоровье",
      price: "3000 грн",
      advantages: ["Глобальная оценка на год вперёд", "Возможность заглянуть в будущее", "Избавляемся от эмоциональных ошибок", "Обретаем внутреннюю гармонию и равновесие"],
      buttonText: "Заказать расклад",
      link: "/",
    },
  ],

  style: {
    section: {
      margin: "0 0 10vh 0",
    }
  }
}

export type PricingConfig = typeof lifeSpheresPricingConfig

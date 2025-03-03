import { phoneNumbers } from "./header/phones"
import { socialIcons } from "@configs/common/socialIcons"
import { anchorLinks } from "@configs/common/anchorLinks"

const imgPath = "/img/contacts"

export let contactsConfig = {
  title: "Таролог, нумеролог, специалист по сферам жизни",
  // image: `${imgPath}/1.jpg`,
  description: "Готовы сделать шаг к лучшей жизни?",

  phoneNumbers: phoneNumbers,
  socialIcons: socialIcons,

  anchorLink: anchorLinks.contacts.replace("#", ""),


  style: {
    title: {
      fontSize: "2rem",
      margin: "50px 0 50px 0",
    },
    image: {
      backgroundImage: `url(${imgPath}/1.jpg)`,
    },
    description: {
      fontSize: "1.5rem",
      margin: "0 0 20px 0",
    },
    icons: {
      fontSize: "2.5rem",
      color: "#008cff", // можно без цвета, просто так добавил
    },
  },
}

export type contactsConfigT = typeof contactsConfig

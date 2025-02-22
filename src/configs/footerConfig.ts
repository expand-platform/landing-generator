import { socialIcons } from "./common/socialIcons";

export let footerConfig = {

  style: {
    icons: {
      fontSize: "2rem",
      color: "#fff",
    }
  },

  text: "Ольга Лукьяненко, 2025 ©",
  phoneNumbers: ["093 747 95 75"], // тоже надо из common брать
  socialIcons: socialIcons
}


export type FooterConfig = typeof footerConfig;

import { navLinks } from "./navLinks"
import { socialIcons } from "../common/socialIcons"
import { headerStyle } from "./headerStyles"
import { phoneNumbers } from "./phones"


export const headerConfig = {
  style: headerStyle,

  logo: {
    text: "Таро в теме",
    image: "",
  },

  nav: {
    enabled: true,
    placement: "center", // left, right
    align: "center", // start, center, end (BS class bind)
    style: {

    },
    links: navLinks,
  },
  phone: {
    numbers: phoneNumbers,
  },
  socialIcons: socialIcons,
  search: {
    enabled: true,
    placement: "", // left (with logo), center (no nav), right (with nav)
    type: "", // field or icon
    icon: "", // bi-search
  }
}

export type HeaderConfig = typeof headerConfig;



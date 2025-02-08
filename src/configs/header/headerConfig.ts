// import type { HeaderConfigT } from "@/types/header/HeaderConfigT"
import { navConfig } from "@/configs/header/navConfig"
import { socialIcons } from "./socialIcons"



export const headerConfig = {
  style: {
    bg: "#000",
    color: "#fff",
    padding: "1rem .5rem",
    fontSize: "1rem",
  },
  logo: {
    text: "EXPAND Platform",
    image: false,
  },
  nav: navConfig,
  socialIcons: socialIcons,
  search: {
    enabled: true,
    placement: "", // left (with logo), center (no nav), right (with nav)
    type: "", // field or icon
    icon: "", // bi-search
  }
}

export type HeaderConfigTest = typeof headerConfig;



import { navLinks } from "./navLinks"
import { socialIcons } from "./socialIcons"


export const headerConfig = {
  style: {
    backgroundColor: "#100c08",
    color: "#f5f5f5",
    padding: "1rem .5rem",
    fontSize: "1.25rem",
  },
  flex: {
    justifyContent: "space-between",
  },
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
  socialIcons: {
    enabled: true,
    placement: "right", // left, right
    icons: socialIcons,
  },
  phones: {
    enabled: false,
    // placement: "right",
    numbers: ["093 777 11 22"],
  },
  search: {
    enabled: true,
    placement: "", // left (with logo), center (no nav), right (with nav)
    type: "", // field or icon
    icon: "", // bi-search
  }
}

export type HeaderConfig = typeof headerConfig;



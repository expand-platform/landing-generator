import type { NavT, HeaderConfigsT } from "@types/header"

export class HeaderConfigs {
  logo: string
  typeOfLogo: string
  nav: NavT[]

  constructor(props: HeaderConfigsT) {
    /* initials */
    this.logo = props.logo
    this.typeOfLogo = "text"

    this.nav = props.nav

    this.init()
  }

  bindThis() {
    this.init = this.init.bind(this);

    this.detectLogoType = this.detectLogoType.bind(this);
  }


  /* init */
  init() {
    this.detectLogoType()
  }

  /* text or image? */
  detectLogoType() {
    const logoString = this.logo

    const imageURLPattern = [
      "http://", "https://", "./", "/"
    ]

    const isImage = imageURLPattern.some(pattern => logoString?.includes(pattern))

    if (isImage) this.typeOfLogo = "image"
  }
}


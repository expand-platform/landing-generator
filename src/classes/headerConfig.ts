import type { Nav } from "@types/header"

export class HeaderConfigs {
  props: any | undefined
  logo: string | undefined
  typeOfLogo: string | undefined

  constructor(props: any) {
    this.props = props

    /* initials */

    this.setInitialConfigs()
  }

  bindThis() {
    this.setInitialConfigs = this.setInitialConfigs.bind(this);

    this.detectLogoType = this.detectLogoType.bind(this);
  }


  /* init */
  setInitialConfigs() {
    this.logo = this.props.logo
    this.typeOfLogo = "text"

    this.detectLogoType()
  }

  /* text or image? */
  detectLogoType() {
    const logoString = this.props.logo

    const imageURLPattern = [
      "http://", "https://", "./", "/"
    ]

    const isImage = imageURLPattern.some(pattern => logoString?.includes(pattern))

    if (isImage) this.typeOfLogo = "image"
  }
}


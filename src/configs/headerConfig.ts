export const headerConfig = {
  style: {
    bg: "#000",
    color: "#fff",
    padding: "1rem .5rem",
  },
  logo: {
    text: "EXPAND Platform",
    image: false,
  },
  nav: {
    placement: "center", // left, right
    align: "center", // start, center, end
    links: [
      {
        text: "Nav link 1",
        url: "/",
        active: true,
        classes: ["nav-link"],
        dropdown: [],
      },
      {
        text: "Nav link 2",
        url: "/",
        active: false,
        classes: ["nav-link"],
        dropdown: [
          {
            text: "yes",
            url: "/",
          },
          {
            text: "yes and no",
            url: "/",
          }
        ],
      },
    ]
  }
}



class HeaderConfigs {
  config: any // props saver
  logo: string
  typeOfLogo: string
  nav: []
  // style: any
  // bg: string
  // color: string
  // navPosition: string
  // padding: string

  constructor(props: any) {
    /* get props */
    this.config = props.config

    /* initial values */
    this.bg = this.config.style.bg
    this.color = this.config.style.color

    this.logo = this.config.logo.image
    this.typeOfLogo = "text"

    this.nav = this.config.nav.links
    this.navPosition = this.config.nav.navPosition

    this.init()
  }

  bindThis() {
    this.init = this.init.bind(this);

    this.detectLogoType = this.detectLogoType.bind(this);
  }

  init() {
    this.detectLogoType()
  }

  /* text or image? */
  detectLogoType() {
    const imageURLPattern = [
      "http://", "https://", "./", "/"
    ]

    const isImage = imageURLPattern.some(pattern => this.logo.includes(pattern))

    if (isImage) this.typeOfLogo = "image"
  }
}

// const config = new HeaderConfigs(headerProps)

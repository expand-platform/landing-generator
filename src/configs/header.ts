import type { HeaderConfigs } from "@types/header"

export const headerConfigs: HeaderConfigs = {
  logo: "EXPAND Platform",
  nav: [
    {
      text: "Nav link 1",
      active: true,
      classes: ["nav-link"],
      dropdown: [],
    },
    {
      text: "Nav link 2",
      active: false,
      classes: ["nav-link"],
      dropdown: [
        {
          text: "yes"
        },
        {
          text: "yes and no"
        }
      ],
    },
  ]
}

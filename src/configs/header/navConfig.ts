import type { NavT } from "@types/header/NavT"

/* TODO: add hovers for links */

export const navConfig = {
  placement: "center", // left, right
  align: "center", // start, center, end
  links: [
    {
      text: "Nav link 1",
      url: "/",
      active: true,
      classes: ["nav-link"],
      dropdown: false,
    },
    {
      text: "Nav link 2",
      url: "/",
      active: true,
      classes: ["nav-link"],
      dropdown: false,
    },
    {
      text: "Nav link 3",
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
  ],
  /* burger settings? */
}

export interface NavT {
  text: string;
  url: string;
  active: boolean;
  classes: string[];
  dropdown: { text: string, url: string, }[];
}

export const navConfigs: NavT[] = [
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

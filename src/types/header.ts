export interface Nav {
  text: string;
  active: boolean;
  classes: string[];
  dropdown: { text: string }[];
}

export interface HeaderConfigs {
  logo: string,
  nav: Nav[],
}

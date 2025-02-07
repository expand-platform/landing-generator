export interface DropDownLink {
  text: string,
  url: string,
}

export interface NavLink {
  text: string,
  url: string,
  active: boolean,
  classes: string[],
  dropdown: DropDownLink[],
}

export interface NavConfigT {
  placement: string,
  align: string,
  links: NavLink[]
}

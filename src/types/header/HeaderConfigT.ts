import type { SocialIconT } from "./SocialIconT"
import type { NavConfigT } from "./NavT"

export interface HeaderConfigT {
  style: { [key: string]: string },
  socialIcons: SocialIconT[],
  logo: { [key: string]: string | boolean },
  nav: NavConfigT,
  search: { [key: string]: string | boolean },
}

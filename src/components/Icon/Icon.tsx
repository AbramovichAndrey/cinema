import React from "react";

import { ReactComponent as PixemaLogo } from "./icons/Logo.svg";
import { ReactComponent as Favorites } from "./icons/Favorites.svg";
import { ReactComponent as Home } from "./icons/Home.svg";
import { ReactComponent as Setting } from "./icons/Setting.svg";
import { ReactComponent as Trends } from "./icons/Trends.svg";
import { ReactComponent as Filter } from "./icons/Filter.svg";
// import { ReactComponent as ArrowDown } from "./icons/Arrow Down.svg";
import { ReactComponent as Close } from "./icons/Close.svg";

const icons = {
  Logo: PixemaLogo,
  Favorites: Favorites,
  Home: Home,
  Setting: Setting,
  Trends: Trends,
  Filter: Filter,
  // ArrowDown: ArrowDown,
  Close: Close,
};

export type IconType = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  type: IconType;
}

const Icon: React.FC<IconProps> = ({ type, ...props }) => {
  const Element = icons[type];
  return <Element {...props} />;
};

export default Icon;

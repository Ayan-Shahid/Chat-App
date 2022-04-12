/* eslint-disable @typescript-eslint/no-empty-interface */
import { ITheme } from "theme/Theme";
import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme extends ITheme {}
}

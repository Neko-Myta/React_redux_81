import type { ReactNode } from "react";
export type RouteObj = {
  path?: string;
  element: ReactNode;
  index?: boolean;
  children?: RouteObj[];
}
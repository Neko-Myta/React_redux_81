import Lesson17 from "../Lessons/Lesson17/Lesson17/Lesson17"
import PageNotFound from "../pages/PageNotFound/PageNotFound"
import type { RouteObj } from "./type"
export const routesData: RouteObj[] = [
  { path: "/", element: <Lesson17 /> },
  { path: "*", element: <PageNotFound /> },
]

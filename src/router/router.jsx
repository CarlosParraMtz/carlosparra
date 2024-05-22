import { useRoutes } from "react-router-dom"
import Index from "../pages/Index"

export default function Router() {
  return useRoutes([
    {
      path: "",
      children: [
        { path: "", element: <Index /> },
      ]
    }
  ])
}

import { Outlet } from "react-router-dom"

const NoLayout = () => {
  return (
    <main className="p-4">
      <Outlet />
    </main>
  )
}

export default NoLayout
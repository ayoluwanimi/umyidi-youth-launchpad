import { Outlet } from "react-router-dom"
import Navbar from "@/components/site/Navbar"
import ScrollToHash from "@/components/system/ScrollToHash"

export default function SiteLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <ScrollToHash />
      <main id="main" className="flex-1"><Outlet /></main>
      <footer className="border-t">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} UMYIDI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
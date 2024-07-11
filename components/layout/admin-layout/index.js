import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Sidebar from './sidebar'

export default function AdminLayout({ children }) {
  return (
    <>
      <div className="col-lg-8 mx-auto p-4 py-md-5">
        <Navbar />
        <main className="container">
          <div class="row g-5">
            <div class="col-md-4">
              <Sidebar />
            </div>
            <div class="col-md-8">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

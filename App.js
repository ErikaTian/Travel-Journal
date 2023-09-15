import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import Footer from "./components/Footer"
import data from "./data"

export default function App() {
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} />
    )
  })

  return (
    <div>
      <Header />
      <section className="cards-list">
        {cards}
      </section>
      <Footer />
    </div>
  )
}
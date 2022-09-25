import React from "react"
import Photo from "./components/Photo"
import Name from "./components/Name"
import Footer from "./components/Footer"
import Description from "./components/Description"
import Button from "./components/Button"

export default function App() {
    return (
        <div className="biz-card">
            <Photo />
            <Name />
            <Button />
            <Description />
            <Footer />
        </div>
    )
}
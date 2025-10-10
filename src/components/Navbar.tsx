import { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-router-dom'

const shopItems = [
    { name: "Dice", subItems: ["Glass", "Metal", "Gemstone"] },
    { name: "Games", subItems: ["Pouches", "Wooden Boards"] },
]

export default function Navbar() {

    const [hover, setHover] = useState("")
    // const [subHover, setSubHover] = useState("")
    

    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li
                    onMouseEnter={() => setHover("Shop")}
                    onMouseLeave={() => setHover("")}
                >
                    Shop
                    <ul>
                        {hover === "Shop" && shopItems.map((item: any) => {
                            return (
                                <li key={item.name}>
                                    {item.name}
                                </li>
                            )
                        })}
                    </ul>
                </li>
                <li>More</li>
                <li>Contact Us</li>
                <li>Shopping Cart</li>
            </ul>
        </nav>
    )
}
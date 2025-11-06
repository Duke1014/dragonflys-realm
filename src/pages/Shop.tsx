

import { useState } from 'react'
import '../styles/App.css'

type Category = {
    id: string
    title: string
    items: { id: string; name: string; price?: string }[]
}

const CATEGORIES: Category[] = [
    {
        id: 'dice',
        title: 'Dice',
        items: [
            { id: 'd1', name: 'Glass Dice Set', price: '$12' },
            { id: 'd2', name: 'Metal Dice Set', price: '$20' },
            { id: 'd3', name: 'Gemstone Dice', price: '$35' },
        ],
    },
    {
        id: 'wooden',
        title: 'Wooden Games',
        items: [
            { id: 'w1', name: 'Carved Chessboard', price: '$45' },
            { id: 'w2', name: 'Wooden Puzzle', price: '$18' },
        ],
    },
    {
        id: 'pouches',
        title: 'Pouch Games',
        items: [
            { id: 'p1', name: 'Velvet Dice Pouch', price: '$8' },
            { id: 'p2', name: 'Leather Pouch', price: '$22' },
        ],
    },
    {
        id: 'toys',
        title: 'Toys',
        items: [
            { id: 't1', name: 'Mini Dragon Figurine', price: '$10' },
            { id: 't2', name: 'Pocket Puzzle Toy', price: '$6' },
        ],
    },
    {
        id: 'accessories',
        title: 'Dice Accessories',
        items: [
            { id: 'a1', name: 'Dice Tray', price: '$15' },
            { id: 'a2', name: 'Dice Tower', price: '$30' },
        ],
    },
    {
        id: 'more',
        title: 'More',
        items: [
            { id: 'm1', name: 'Gift Card', price: '$25' },
        ],
    },
]

export default function Shop() {
    const [active, setActive] = useState<string>(CATEGORIES[0].id)

    const current = CATEGORIES.find((c) => c.id === active) || CATEGORIES[0]

    return (
        <div className="shop-container" style={{ display: 'flex', gap: 24, padding: 24 }}>
            <aside style={{ minWidth: 180 }}>
                <h2>Categories</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {CATEGORIES.map((cat) => (
                        <li key={cat.id} style={{ margin: '8px 0' }}>
                            <button
                                onClick={() => setActive(cat.id)}
                                style={{
                                    width: '100%',
                                    textAlign: 'left',
                                    padding: '8px 12px',
                                    background: cat.id === active ? '#e6f4ff' : 'transparent',
                                    border: '1px solid #ddd',
                                    borderRadius: 6,
                                    cursor: 'pointer',
                                }}
                            >
                                {cat.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>

            <section style={{ flex: 1 }}>
                <h2>{current.title}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: 16 }}>
                    {current.items.map((it) => (
                        <article key={it.id} style={{ border: '1px solid #eee', padding: 12, borderRadius: 8 }}>
                            <div style={{ fontWeight: 600 }}>{it.name}</div>
                            <div style={{ color: '#666', marginTop: 6 }}>{it.price ?? '—'}</div>
                            <div style={{ marginTop: 8 }}>
                                <button style={{ padding: '6px 10px', borderRadius: 6, cursor: 'pointer' }}>Add to cart</button>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    )
}
import { useState, useEffect } from "react";

export default function DynamicGrid({ cards }) {
    const [currentCards, setCurrentCards] = useState(cards);

    useEffect(() => {
        // Actualiza las tarjetas cada vez que el array cambia
        setCurrentCards(cards);
    }, [cards]);

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-gray-100 shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg transition"
                    >
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-32 h-32 object-cover mb-4 rounded-full"
                        />
                        <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                        <p className="text-sm text-gray-600">{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

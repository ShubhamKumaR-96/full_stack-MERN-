import React from "react";

const Card = () => {
  const cardData = [
    {
      name: "Mountain View",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
      description: "A breathtaking view of the mountains during sunset.",
      inStock: true,
    },
    {
      name: "City Lights",
      image:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=500&auto=format&fit=crop&q=60",
      description: "The city comes alive with lights at night.",
      inStock: true,
    },
    {
      name: "Forest Path",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
      description: "A serene path through a dense forest.",
      inStock: false,
    },
    {
      name: "Ocean Waves",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&auto=format&fit=crop&q=60",
      description: "Waves crashing onto the shore on a sunny day.",
      inStock: false,
    },
    {
      name: "Desert Dunes",
      image:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
      description: "Rolling dunes in a vast desert landscape.",
      inStock: true,
    },
  ];

  return (
    <div className="w-full flex items-center justify-center gap-10">
      {cardData.map((card, idx) => (
        <div
          className="w-60 px-3 py-4 bg-zinc-100 overflow-hidden rounded-lg shadow-lg"
          key={idx}
        >
          <div className="w-full h-36 object-cover">
            <img
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 ease-in-out"
              src={card.image}
              alt={card.name}
            />
          </div>
          <div className="w-full px-2 py-2 text-left">
            <h2 className="font-semibold">{card.name}</h2>
            <p className="text-sm mt-5">{card.description}</p>
            <button
              className={`px-2 py-2 ${
                card.inStock ? "bg-blue-600" : "bg-red-600"
              } text-white mt-2 rounded-md text-sm w-full`}
            >
              {card.inStock ? "In Stock" : "Out of Stock"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;

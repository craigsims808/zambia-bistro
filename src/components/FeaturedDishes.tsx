export const FeaturedDishes = () => {
  const dishes = [
    {
      name: "Nshima with Grilled T-Bone",
      description: "Traditional Zambian staple served with premium beef",
      price: "K250",
    },
    {
      name: "Village Chicken Stew",
      description: "Free-range chicken cooked in aromatic herbs and spices",
      price: "K180",
    },
    {
      name: "Kapenta with Vegetables",
      description: "Fresh caught Kapenta served with organic local vegetables",
      price: "K150",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold text-brown sm:text-4xl">
          Featured Dishes
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="rounded-lg border border-gray-200 p-6 shadow-sm transition-transform hover:scale-105"
            >
              <h3 className="mb-2 text-xl font-semibold text-brown">
                {dish.name}
              </h3>
              <p className="mb-4 text-brown/70">{dish.description}</p>
              <p className="text-lg font-medium text-primary">{dish.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
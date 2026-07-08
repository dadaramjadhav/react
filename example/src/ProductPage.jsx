const products = [
  {
    id: 1,
    name: "Laptop",
    price: "$1200",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Phone",
    price: "$800",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Headphones",
    price: "$150",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Watch",
    price: "$250",
    image: "https://via.placeholder.com/300",
  },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Products</h1>

      <div
        className="grid gap-6 
                      grid-cols-1   // For small screens 
                      sm:grid-cols-2 // For medium screens
                      md:grid-cols-3 // For large screens
                      lg:grid-cols-4" // For extra-large screens
      >
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="h-40 w-full object-cover rounded-t-lg" />

            <div className="p-4">
              <h2 className="font-semibold text-lg">{product.name}</h2>
              <p className="text-gray-600">{product.price}</p>

              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProduct } from "./api";

export default function AddProduct() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addProduct,
    onSuccess: (data) => {
      console.log("Product added successfully", data);
      queryClient.invalidateQueries({ queryKey: ["products"] });
    },
    onError: (error) => {
      console.log("Error adding product", error);
    },
  });
  const handleAddProduct = (e) => {
    e.preventDefault();
    mutation.mutate({
      title: e.target.title.value,
      price: e.target.price.value,
    });
  };
  return (
    <>
      <h2>Add Product</h2>
      <form onSubmit={handleAddProduct} className="space-y-4">
        <input
          name="title"
          placeholder="Product name"
          className="border px-2 py-1"
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          className="border px-2 py-1"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-1 rounded"
          disabled={mutation.isPending}
        >
          {mutation.isPending ? "Adding..." : "Add Product"}
        </button>
        {mutation.isError && (
          <p className="text-red-500">Error adding product</p>
        )}
        {mutation.isSuccess && <p className="text-green-500">Product added!</p>}
      </form>
    </>
  );
}

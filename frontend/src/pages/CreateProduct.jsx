import { motion } from "framer-motion";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreateProduct = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-md mx-auto px-4 py-12"
    >
      <h1 className="text-3xl font-bold text-center mb-8">
        Create New Product
      </h1>

      <div className="bg-slate-800/70 backdrop-blur p-6 rounded-xl shadow-lg">
        <div className="flex flex-col gap-4">
          <input className="p-2 rounded" placeholder="Name" />
          <input className="p-2 rounded" placeholder="Price" />
          <input className="p-2 rounded" placeholder="Image URL" />

          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg"
          >
            Add Product
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CreateProduct;

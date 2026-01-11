import { motion } from "framer-motion";
import { useState } from "react";
import { useProductStore } from "../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isOpen, setIsOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.03 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-800/70 backdrop-blur rounded-xl overflow-hidden shadow-lg hover:shadow-cyan-500/20"
      >
        <img
          src={product.image}
          className="h-48 w-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="p-5">
          <h3 className="text-lg font-semibold text-white">
            {product.name}
          </h3>

          <p className="text-cyan-400 font-bold mt-1">
            ${product.price}
          </p>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="flex-1 bg-cyan-500 hover:bg-cyan-600 py-2 rounded-lg"
            >
              Edit
            </button>
            <button
              onClick={() => deleteProduct(product._id)}
              className="flex-1 bg-rose-500 hover:bg-rose-600 py-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ProductCard;

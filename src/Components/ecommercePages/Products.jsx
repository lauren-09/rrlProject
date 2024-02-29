import React, { createContext, useState, useEffect } from "react";
import { Plus, Eye } from "lucide-react";
import { Link } from "react-router-dom";
const Products = () => {
  //useStates
  const [products, setProducts] = useState([]);
  //useEffects
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);

      setProducts(data);
    };
    getProducts();
  }, []);

  const filter = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <div>
        <section class="py-16">
          <div class="container mx-auto">
            <div className="poppins-black text-5xl mb-6 underline">
              Popular Products
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {filter.map((product) => {
                return (
                  <>
                    <div>
                      <div
                        class="w-full h-[300px] border mb-4 relative overflow-hidden group transition rounded-md"
                        key={product.id}
                      >
                        <div class="w-full h-full flex justify-center items-center">
                          <div class="w-[200px] mx-auto flex justify-center items-center">
                            <img
                              class="max-h-[160px] group-hover:scale-110 transition duration-1000"
                              src={product.image}
                              alt=""
                            />
                          </div>
                          <div className="absolute top-1 right-0 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-1000">
                            <button>
                              <div className="flex justify-center items-center bg-foreground text-white w-10 h-10 rounded-lg">
                                <Plus className="text-3xl" />
                              </div>
                            </button>
                            <Link
                              to={"/ecommerce"}
                              className="w-10 h-10 bg-primary flex justify-center items-center text-white drop-shadow-xl rounded-lg"
                            >
                              <Eye />
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className=" text-sm capitalize text-muted-foreground mb-1">
                        {product.category}
                      </div>
                      <div className="poppins-medium mb-2">{product.title}</div>
                      <div className="poppins-light text-md">
                        ₱ {product.price}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Products;

"use client";

import { useState } from "react";
import { IoBagAdd, IoHeart, IoHeartOutline } from "react-icons/io5";
import { Radio, RadioGroup } from "@headlessui/react";
import AddOrRemoveQuantity from "../../global/add_or_remove_quantity";

export default function ProductDetailForm({
  product,
  addItem,
  addOne,
  removeItem,
  quantity,
  alreadyCarted,
  alreadyWishlisted,
  handleWishlist,
}) {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);
  const [showError, setShowError] = useState(false);

  const requiresSize = product.sizes?.length > 0;
  const requiresColor = product.colors?.length > 0;

  const increment = () => {
    if (qty < product.stock) {
      const newQty = qty + 1;
      setQty(newQty);
    }
  };
  const decrement = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleAddToCart = () => {
    if ((requiresSize && !selectedSize) || (requiresColor && !selectedColor)) {
      setShowError(true);
      return;
    }
    addItem({
      ...product,
      qty: qty,
      color: selectedColor,
      size: selectedSize,
    });
    setShowError(false);
  };

  return (
    <section aria-labelledby="options-heading" className="mt-10">
      <form>
        {product.colors && (
          <fieldset aria-label="Choose a color">
            <legend className="text-sm font-medium text-gray-900">Color</legend>

            <RadioGroup
              value={selectedColor}
              onChange={setSelectedColor}
              className="mt-4 flex items-center gap-x-3"
            >
              {product.colors.map((color) => (
                <Radio
                  key={color.name}
                  value={color.name}
                  aria-label={color.name}
                  className={({ checked }) =>
                    `relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 border-2 transition ${
                      checked
                        ? "border-purple-500 ring-2 ring-purple-500"
                        : "border-gray-300"
                    }`
                  }
                >
                  <span
                    aria-hidden="true"
                    className={classNames(
                      color.class,
                      "size-8 rounded-full border border-black/10"
                    )}
                  />
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        )}
        {product.sizes && (
          <fieldset aria-label="Choose a size" className="mt-10">
            <div className="flex items-center">
              <div className="text-sm font-medium text-gray-900">Size</div>
            </div>

            <RadioGroup
              value={selectedSize}
              onChange={setSelectedSize}
              className="mt-4 grid grid-cols-4 gap-4"
            >
              {product.sizes.map((size) => (
                <Radio
                  key={size.name}
                  value={size.name}
                  disabled={!size.inStock}
                  className={({ checked }) =>
                    classNames(
                      size.inStock
                        ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                        : "cursor-not-allowed bg-gray-50 text-gray-200",
                      checked
                        ? "border-purple-500 ring-2 ring-purple-500"
                        : "border-stone-300",
                      "group border-2 transition relative flex items-center justify-center px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1"
                    )
                  }
                >
                  <span>{size.name}</span>
                  {size.inStock ? (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-transparent group-data-checked:border-indigo-500 group-data-focus:border"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-stone-200"
                    >
                      <svg
                        stroke="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        className="absolute inset-0 size-full stroke-2 text-gray-200"
                      >
                        <line
                          x1={0}
                          x2={100}
                          y1={100}
                          y2={0}
                          vectorEffect="non-scaling-stroke"
                        />
                      </svg>
                    </span>
                  )}
                </Radio>
              ))}
            </RadioGroup>
          </fieldset>
        )}
        <fieldset aria-label="Choose a quantity" className="mt-10">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-900">Quantity</div>
          </div>
          <div className="mt-4 flex items-center border-2 border-black/10 rounded-full w-max">
            <button
              type="button"
              onClick={decrement}
              className="px-3 py-2 text-purple-500 font-bold rounded-l-full border-r border-black/10 hover:bg-purple-500 hover:text-white transition-colors duration-200"
            >
              –
            </button>
            <input
              type="text"
              readOnly
              value={qty}
              className="w-12 text-center outline-none font-medium"
            />
            <button
              type="button"
              onClick={increment}
              className="px-3 py-2 text-purple-500 font-bold rounded-r-full border-l border-black/10 hover:bg-purple-500 hover:text-white transition-colors duration-200"
            >
              +
            </button>
          </div>
        </fieldset>
        <div className="mt-10 flex gap-3 sm:gap-5">
          <button
            type="button"
            onClick={handleWishlist}
            className="px-5 py-1 md:py-2 text-3xl text-purple-500 hover:bg-gray-50 shadow border border-purple-500 focus:border-0 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
          >
            {alreadyWishlisted ? <IoHeart /> : <IoHeartOutline />}
          </button>
          {alreadyCarted &&
          quantity > 0 &&
          !product.colors &&
          !product.sizes ? (
            <div className="w-full">
              <AddOrRemoveQuantity
                className={"w-full"}
                addOne={addOne}
                removeItem={removeItem}
                qty={quantity}
                product={product}
              />
            </div>
          ) : (
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={product.stock < 1}
              className={`flex gap-3 w-full items-center justify-center border border-transparent shadow px-8 py-3 text-base font-medium text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hiddenproduct.stock < 1
                ${product.stock < 1 ? "cursor-not-allowed bg-stone-400"
                : "cursor-pointer bg-purple-500 hover:bg-black"
            }`}
            >
              Add to bag <IoBagAdd />
            </button>
          )}
        </div>
      </form>
      {showError && (
          <p className="text-red-500 mt-2">
            Please select {requiresSize && !selectedSize ? "a size " : ""}
            {requiresSize && requiresColor && !selectedSize && !selectedColor
              ? " and "
              : ""}
            {requiresColor && !selectedColor ? "a color " : ""}
            before adding to cart.
          </p>
        )}
    </section>
  );
}

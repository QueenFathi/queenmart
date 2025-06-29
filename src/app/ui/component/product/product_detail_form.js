import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";
import {
  Radio,
  RadioGroup,
} from "@headlessui/react";

export default function ProductDetailForm({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.colors && product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes && product.sizes[0]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <section
      aria-labelledby="options-heading"
      className="mt-10"
    >
      <form>
        <fieldset aria-label="Choose a color">
          <legend className="text-sm font-medium text-gray-900">
            Color
          </legend>

          <RadioGroup
            value={selectedColor}
            onChange={setSelectedColor}
            className="mt-4 flex items-center gap-x-3"
          >
            {product.colors && product.colors.map((color) => (
              <Radio
                key={color.name}
                value={color}
                aria-label={color.name}
                className={({ checked }) =>

                  `relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 border-2 transition ${checked ? 'border-purple-500 ring-2 ring-purple-500' : 'border-gray-300'}`
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
        <fieldset aria-label="Choose a size" className="mt-10">
          <div className="flex items-center">
            <div className="text-sm font-medium text-gray-900">
              Size
            </div>
          </div>

          <RadioGroup
            value={selectedSize}
            onChange={setSelectedSize}
            className="mt-4 grid grid-cols-4 gap-4"
          >
            {product.sizes && product.sizes.map((size) => (
              <Radio
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ checked }) => classNames(
                  size.inStock
                    ? "cursor-pointer bg-white text-gray-900 shadow-xs"
                    : "cursor-not-allowed bg-gray-50 text-gray-200",
                  checked ? 'border-purple-500 ring-2 ring-purple-500' : 'border-stone-300',
                  "group border-2 transition relative flex items-center justify-center px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-hidden sm:flex-1"
                )}
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

        <div className="flex justify-between gap-3 sm:gap-5 mt-6">
          <div className="flex items-center">
            <div className="cursor-pointer px-3 sm:px-5 py-3 text-white text-lg bg-purple-500 hover:bg-black"> - </div>
            <input type="text" className="w-12 sm:w-16 text-center focus:outline-none" value={1} readOnly />
            <div className="cursor-pointer px-3 sm:px-5 py-3 text-white text-lg bg-purple-500 hover:bg-black"> + </div>
          </div>
          <button
            type="submit"
            className="flex gap-3 w-full items-center justify-center border border-transparent bg-purple-500 px-8 py-3 text-base font-medium text-white hover:bg-black focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-hidden"
          >
            Add to bag <IoBagAdd />
          </button>
        </div>
      </form>
    </section>
  )
}
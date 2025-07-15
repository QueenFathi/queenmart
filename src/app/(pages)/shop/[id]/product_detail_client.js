"use client";

import Image from "next/image";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";
import ProductCard from "@/app/ui/component/global/product_card";
import ProductDetailForm from "@/app/ui/component/shop/product/product_detail_form";
import ReviewCard from "@/app/ui/component/shop/product/reviewcard";
import AccordionSection from "@/app/ui/component/shop/product/accordion_section";
import ProductCardSkeleton from "@/app/ui/component/skeletons/product_card_skeleton";
import { useWishlist } from "@/app/context/wishlist/wishlist_provider";
import { useCart } from "@/app/context/cart/cart_provider";
import { reviews } from "@/app/lib/dummy_data";
import { formatMoney } from  "@/app/lib/utils";

const shippingData =
  "Note: <br /> Items will be dispatched within 24 hours after payment confirmation. <br /> Estimated delivery: 3–5 business days We use trusted carriers to ensure safe and timely delivery. <br /> Shipping may be delayed due to high demand or weather conditions. <br /> International orders may be subject to customs duties. <br /> Please allow up to 48 hours for tracking updates to appear";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetailClient({ products, product }) {
  const { cart, addItem, addOne, removeItem } = useCart();
  const { wishlist, addToWishlist, deleteWishlistItem } = useWishlist();

  const alreadyWishlisted =
    wishlist.filter((wItem) => wItem.id === product.id).length > 0;

  const alreadyCarted =
    cart.filter((cItem) => cItem.id === product.id).length > 0;

  const itemInCart = cart.find((item) => item.id === product.id);
  const quantity = itemInCart ? itemInCart.qty : 0;

  const handleWishlist = () => {
    alreadyWishlisted ? deleteWishlistItem(product) : addToWishlist(product);
  };

  return (
    <div>
      <div className="container mx-auto py-16 md:py-20 px-2">
        <div className="flex gap-3 py-10 text-base md:text-lg">
          <Link href="/">Home</Link> \<Link href="/shop">Shop</Link> \
          <Link
            href={`/shop/${encodeURIComponent(product.id)}`}
            className="text-stone-500"
          >
            {product.name}
          </Link>
        </div>
        <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 md:grid-cols-12 lg:gap-x-8  border-b border-stone-200 pb-14">
          <Image
            alt={product.name}
            src={product.imagesrc}
            width={1000}
            height={1000}
            className="aspect-2/3 w-full h-auto rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
          />
          <div className="sm:col-span-8 lg:col-span-7">
            <h2 className="text-xl font-bold text-stone-700 sm:pr-12">
              {product.name}
            </h2>
            <section aria-labelledby="information-heading" className="mt-2">
              <h3 id="information-heading" className="sr-only">
                Product information
              </h3>
              {product.discount ? (
                <p>
                  <span className="text-lg text-stone-500 line-through pe-3">
                    # {formatMoney(product.price)}
                  </span>{" "}
                  <span className="text-2xl text-stone-900 font-semibold">
                    {" "}
                    # {formatMoney(product.price - (product.price * product.discount) / 100)}
                  </span>
                </p>
              ) : (
                <p className="text-2xl text-stone-900 font-semibold">
                  # {formatMoney(product.price)}
                </p>
              )}
              <div className="mt-6">
                <h4 className="sr-only">Reviews</h4>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating
                            ? "text-gray-900"
                            : "text-gray-200",
                          "size-5 shrink-0"
                        )}
                      />
                    ))}
                  </div>
                  <p className="sr-only">{product.rating} out of 5 stars</p>
                  <a
                    href="#"
                    className="ml-3 text-sm font-medium text-purple-500 hover:text-stone-700"
                  >
                    {product.reviewcount} reviews
                  </a>
                </div>
              </div>
            </section>
            <ProductDetailForm
              alreadyCarted={alreadyCarted}
              product={product}
              addItem={addItem}
              removeItem={removeItem}
              addOne={addOne}
              quantity={quantity}
              alreadyWishlisted={alreadyWishlisted}
              handleWishlist={handleWishlist}
            />
          </div>
        </div>
        <AccordionSection
          shippingdata={shippingData}
          descriptiondata={product.description}
          detaildata={product.detail}
        />
        <div className="pt-10">
          <div className="py-8 flex gap-2">
            <span className="w-2 bg-purple-500"></span>
            <h1 className=" text-2xl font-bold">CUSTOMERS ALSO VIEWED</h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-4 gap-1 md:gap-3">
              {!products
                ? [...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                    >
                      <ProductCardSkeleton />
                    </div>
                  ))
                : products
                    .filter((p) => p.categoryname === product.categoryname)
                    .map((product) => (
                      <div
                        key={product.id}
                        className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                      >
                        <ProductCard product={product} />
                      </div>
                    ))}
            </div>
          </div>
        </div>

        <div className="py-20">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl">
              Product Ratings & Reviews
            </h1>
            <Link
              href=""
              className="text-base md:text-lg text-purple-500 hover:underline hover:text-black"
            >
              See more
            </Link>
          </div>
          <div className="mt-10">
            {reviews.map((data, index) => (
              <ReviewCard key={index} data={data} />
            ))}
          </div>
        </div>
        <div className="">
          <div className="py-8 flex gap-2">
            <span className="w-2 bg-purple-500"></span>
            <h1 className=" text-2xl font-bold">YOU MAY ALSO LIKE</h1>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-4 gap-1 md:gap-3">
              {!products
                ? [...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                    >
                      <ProductCardSkeleton />
                    </div>
                  ))
                : products.slice(3, 9).map((product) => (
                    <div
                      key={product.id}
                      className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border"
                    >
                      <ProductCard product={product} />
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

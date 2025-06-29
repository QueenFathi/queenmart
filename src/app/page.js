import Link from "next/link";
import Carousel from "./ui/component/home/carousel";
import CategoriesCard from "./ui/component/home/categories_card";
import Card2 from "./ui/component/home/card2";
import ProductCard from "./ui/component/product_card";
import CheckStatus from "./ui/component/home/check_status";
import FeaturedSection from "./ui/component/home/featured_section";
import UpButton from "@/app/ui/component/home/up_button"
import { Suspense } from "react";
import ProductCardSkeleton from "./ui/component/product_card_skeleton";
import { getAllProducts } from "./lib/queries";


export default async function Home() {
  const products = await getAllProducts()
  const popularProducts = products.slice().sort((a, b) => b.reviewcount - a.reviewcount).slice(0, 8);


  return (
    <div>
      <UpButton />
      <main>
        <Carousel />
        <div className="container mx-auto py-16 md:py-20 px-2">
          <div className="flex items-center justify-between px-0 sm:px-2 py-5">
            <h1 className="text-2xl sm:text-3xl font-bold">Popular items</h1>
            <Link
              href=""
              className="text-base md:text-xl font-semibold text-stone-700 hover:underline hover:text-purple-500"
            >
              See all products &gt;
            </Link>
          </div>
          <div className="w-full overflow-hidden">
            <div className="flex overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-50 snap-x snap-mandatory space-x-2">
              {popularProducts.map((product) => (
              <div key={product.id} className="snap_start w-[45%] sm:w-[35%] lg:w-[23%] flex-shrink-0 bg-white border">
                <Suspense fallback={<ProductCardSkeleton />}>
                  <ProductCard product={product} />
                </Suspense>
              </div>  
            ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto px-2">
          <div className="py-5">
            <h1 className="text-2xl sm:text-3xl font-bold">
              Browse our Favourite Categories
            </h1>
          </div>
          <div className="grid grid-row md:grid-cols-2">
            <Card2
              img={"/card2img1.png"}
              p={"Enhance your inner beauty"}
              height={"h-[17rem] md:h-[35rem]"}
            />
            <div className="grid grid-row">
              <Card2
                img={"/card2img2.png"}
                p={"Shop from our new arrival"}
                height={"h-[17rem]"}
              />
              <Card2
                img={"/card2img3.png"}
                p={"Get your favourites items"}
                height={"h-[17rem]"}
              />
            </div>
          </div>
        </div>
        <div className="container mx-auto py-20 px-2">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold flex gap-3 items-center justify-center">
              <span className="bg-black h-1 w-10 md:w-20"></span>
              <span className="p-2 bg-white">NewArrivals</span>
              <span className="bg-black h-1 w-10 md:w-20"></span>
            </h2>
            <p className="text-purple-500">
              <Link href="" className="text-base md:text-lg">
                Hurry up to buy
              </Link>
            </p>
          </div>
          <div className="pt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-5 lg:gap-10">
          {products.slice(0, 8).map((product) => (
               <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
                <ProductCard product={product}/>
                </Suspense> 
            ))}
          </div>
        </div>
        <div className="container mx-auto px-2">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold flex gap-3 items-center justify-center">
              <span className="bg-black h-1 w-10 md:w-20"></span>
              <span className="p-2 bg-white">CATEGORIES</span>
              <span className="bg-black h-1 w-10 md:w-20"></span>
            </h2>
            <p className="text-purple-500">
              <Link href="" className="text-base md:text-lg">
                Check out our shop to see all products
              </Link>
            </p>
          </div>
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10">
            <CategoriesCard img={"/heel.jpg"} category={"Shoes"} href={""} />
            <CategoriesCard img={"/car3.png"} category={"Bags"} href={""} />
            <CategoriesCard
              img={"/card2img1.png"}
              category={"Accesories"}
              href={""}
            />
            <CategoriesCard
              img={"/card2img3.png"}
              category={"Clothes"}
              href={""}
            />
          </div>
        </div>
        <div className="container mx-auto py-20 px-2">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold flex gap-3 items-center justify-center">
              <span className="bg-black h-1 w-10 md:w-20"></span>
              <span className="p-2 bg-white">SHOES</span>
              <span className="bg-black h-1 w-10 md:w-20"></span>
            </h2>
            <p className="text-purple-500">
              <Link href="" className="text-base md:text-lg">
                Check out our shop to see all products
              </Link>
            </p>
          </div>
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-x-3 gap-y-5 lg:gap-10">
          {products.filter(p => p.categoryname === "shoes").map((product) => (
                <Suspense key={product.id} fallback={<ProductCardSkeleton />}>
                <ProductCard product={product}/>
                </Suspense> 
            ))}
          </div>
        </div>
        <CheckStatus />
        <FeaturedSection />
      </main>
    </div>
  );
}

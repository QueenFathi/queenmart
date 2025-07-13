import SearchOverlay from "@/app/ui/component/search/search_overlay";
import Image from "next/image";
import Link from "next/link";

export default async function About({ searchParams }) {
  return (
    <>
      <SearchOverlay searchParams={searchParams} />
      <div className="py-16 md:py-20">
        <section className="container px-2 mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/card2img2.png"
              width={1000}
              height={1000}
              alt="about us image"
              className="w-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-700">
              Welcome to <span className="text-purple-500">QueenMart</span>
            </h2>
            <p className="mt-5 text-stone-600  text-base md:text-lg leading-relaxed">
              Your go-to destination for stylish, high qulity clothing. We bring
              you the latest fashion trends with comfort, affordability, and
              sustainability in mind
            </p>
            <p className="mt-2 text-stone-600 text-base md:text-lg">
              Explore our exclusive collections and express yourself through
              fashion
            </p>
            <div className="mt-10">
              <Link
                href="/shop"
                className="bg-purple-500 shadow-purple-400 text-white px-10 py-3 text-lg font-medium shadow hover:bg-black transition"
              >
                Shop now
              </Link>
            </div>
          </div>
        </section>
        <section className="container mx-auto bg-white py-28 px-2 md:px-16">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-800">
              Our Mission & Values
            </h2>
            <p className="mt-4 text-base md:text-lg text-stone-600 max-w-3xl mx-auto">
              At{" "}
              <span className="text-purple-500 font-semibold">QueenMart</span>,
              we believe fashion is more than just clothing—it’s a statement of
              identity. Our mission is to provide high-quality, sustainable, and
              stylish fashion that empowers you to express yourself with
              confidence.
            </p>
          </div>
          <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-5 bg-stone-50 shadow-lg text-center">
              <div className="text-5xl">✨</div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-stone-800">
                Quality & Comfort
              </h3>
              <p className="mt-2 text-stone-600">
                We prioritize premium materials and craftsmanship to ensure our
                clothing is comfortable, durable, and stylish.
              </p>
            </div>
            <div className="p-5 bg-stone-50 shadow-lg text-center">
              <div className="text-5xl">🌱</div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-stone-800">
                Sustainability
              </h3>
              <p className="mt-2 text-stone-600">
                We are committed to eco-friendly practices, ethical sourcing,
                and reducing fashion waste.
              </p>
            </div>
            <div className="p-5 bg-stone-50 shadow-lg text-center">
              <div className="text-5xl">🤝</div>
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-stone-800">
                Diversity & Inclusivity
              </h3>
              <p className="mt-2 text-stone-600">
                Fashion is for everyone. We celebrate all styles, sizes, and
                cultures, ensuring our collections are inclusive and accessible.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-purple-500 text-white py-20 px-6 md:px-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Join Our Fashion Community
            </h2>
            <p className="mt-4 text-base sm:text-lg">
              Be the first to discover new arrivals, exclusive discounts, and
              fashion tips. Sign up now and enjoy a{" "}
              <span className="font-semibold">10% discount</span> on your first
              order!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/shop"
                className="relative shadow-md px-6 py-3 bg-white text-purple-500 group overflow-hidden cursor-pointer"
              >
                <span className="absolute top-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out" />
                <span className="relative z-10 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  Shop Now
                </span>
              </Link>
              <Link
                href=""
                className="relative shadow-md px-6 py-3 bg-white text-purple-500 group overflow-hidden cursor-pointer"
              >
                <span className="absolute top-0 left-0 w-0 h-0 bg-black group-hover:w-full group-hover:h-full transition-all duration-300 ease-in-out" />
                <span className="relative z-10 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  Subscibe & Save
                </span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import { sanityClient } from "@/lib/sanity/client";
import { allProductsQuery } from "@/lib/sanity/queries";
import { generateWhatsAppLink } from "@/lib/sanity/whatsapp";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/image";

type Product = {
  _id: string;
  title: string;
  price: number;
  image: any;
};

export default async function ShopPage() {
  const products: Product[] = await sanityClient.fetch(allProductsQuery);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-white mb-8">
        Shop Jerseys
      </h1>

      {products.length === 0 ? (
        <p className="text-white">No products yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <a
  key={product._id}
  href={generateWhatsAppLink(product.title, product.price)}
  target="_blank"
  rel="noopener noreferrer"
  className="group block bg-white rounded-xl p-6
           border border-gray-200
           transition-all duration-300
           hover:-translate-y-2 hover:shadow-xl"
>
            <div className="relative h-48 bg-gray-100 rounded mb-4 overflow-hidden">

  {/* PRICE BADGE */}
  <span className="absolute top-2 right-2 bg-sky-500 text-white text-sm font-semibold px-3 py-1 rounded-full shadow">
    ₦{product.price.toLocaleString()}
  </span>

  {product.image && (
    <Image
      src={urlFor(product.image).width(400).height(400).url()}
      alt={product.title}
      fill
      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
    />
  )}
</div>

             <h3 className="font-semibold text-gray-900">
  {product.title}
</h3>

<p className="text-sm text-gray-600 mt-1">
  ₦{product.price.toLocaleString()}
</p>

<p className="mt-3 text-sm font-medium text-sky-600 flex items-center gap-1 group-hover:underline">
  Tap to order on WhatsApp →
</p>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
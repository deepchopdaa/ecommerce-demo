import Image from "next/image";
import { Suspense } from "react";
import PopulorProduct from "../../Components/Product";
import CartButton from "../../Components/CartButton";
import ReviewForm from "../../Components/reviews";
import ProductChatbot from "../../Components/ChatBot";

export const revalidate = 60;

// Generate static params
export async function generateStaticParams() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/productsIds`, {
        cache: "no-store",
    });

    const products = await res.json();

    return products.map((p) => ({
        id: p._id,
    }));
}

// Fetch single product detail API
async function getProductDetail(id) {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/user/getProducts/${id}`,
        {
            next: { revalidate: 60 },
        }
    );

    if (!res.ok) return null;

    return res.json();
}

export default async function Page({ params }) {
    const { id } = await params;

    const data = await getProductDetail(id);

    if (!data) return <p>Product not found!</p>;

    const {
        product,
        similarProducts,
        reviews,
        avgRating,
        reviewCount,
    } = data;

    const price = product.price;
    const discountPrice = product.discountPrice;

    const discountPercent =
        price > 0
            ? Math.round(((price - discountPrice) / price) * 100)
            : 0;

    return (
        <>
            <div className="lg:flex w-full px-4">
                <Image
                    alt={product.name}
                    src={product.image.url}
                    width={500}
                    height={500}
                    className="object-contain mx-auto mt-10"
                />

                <div className="lg:ml-10 mt-10">
                    <h1 className="text-3xl font-bold mt-10">
                        {product.name}
                    </h1>

                    <p className="text-xl mt-5">
                        {product.description}
                    </p>

                    <h2 className="text-xl font-semibold mt-5">
                        Brand: {product.brand?.name}
                    </h2>

                    <h2 className="text-xl font-semibold mt-2">
                        Category: {product.category?.name}
                    </h2>

                    <p className="mt-4">
                        Price: ₹{discountPrice.toLocaleString()}
                        {discountPercent > 0 && (
                            <span className="ml-3 text-green-600 font-semibold">
                                {discountPercent}% OFF
                            </span>
                        )}
                    </p>

                    <p className="line-through text-gray-500">
                        ₹{price.toLocaleString()}
                    </p>

                    <p className="mt-2">
                        ⭐ {avgRating} ({reviewCount} reviews)
                    </p>

                    <div className="flex gap-4 mt-6">
                        <CartButton product={product} />
                    </div>
                </div>
            </div>

            <Suspense fallback={<h1 className="text-center mt-10 text-2xl">Reviews Loading...</h1>}>
                <ReviewForm reviews={reviews} productId={product._id} />
            </Suspense>

            <Suspense fallback={<h1 className="text-center mt-10 text-2xl">Products Loading...</h1>}>
                <PopulorProduct products={similarProducts} />
            </Suspense>

            <ProductChatbot />
        </>
    );
}

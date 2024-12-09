import Link from "next/link";
import Basket from "../../components/Basket";
import ProductList from "../../components/ProductList";

export default function ProductsPage() {
    return (
        <>
            <header className="p-4">
                <Link href="/">&lt; Back to home page</Link>
            </header>

            <main className="flex flex-col justify-between p-4 md:flex-row">
                <Basket className="p-4 mb-8 border" />
                <ProductList />
            </main>
        </>
    );
}

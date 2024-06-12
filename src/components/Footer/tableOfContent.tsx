import Link from "next/link";

export default function TableOfContent() {
  const products = [
    {
      name: "Portfolio Templates",
      href: "/portfolio",
    },
  ];

  const supports = [
    {
      name: "Terms of Service",
      href: "/terms",
    },
    {
      name: "Privacy Policy",
      href: "/policy",
    },
  ];
  return (
    <section className="mt-16 flex gap-x-10">
      <div>
        <p className="text-xl font-bold text-gray-light mb-4">Our Products</p>
        <ul className="flex flex-col gap-y-2.5">
          {products.map((product) => {
            return (
              <Link className="text-lg" key={product.name} href={product.href}>
                {product.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="text-xl font-bold text-gray-light mb-4">Supports</p>
        <ul className="flex flex-col gap-y-2.5">
          {supports.map((support) => {
            return (
              <Link className="text-lg" key={support.name} href={support.href}>
                {support.name}
              </Link>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

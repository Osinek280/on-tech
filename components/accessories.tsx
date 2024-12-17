import { Cap, Connector } from '@/constants'
import Image from 'next/image'

export default function Accessories({title, connectors, caps}: {title: string, connectors: Connector[], caps: Cap[]}) {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8">{title}</h2>

        <div className="space-y-12">
          <ProductGrid title="Connectors" products={connectors} />
          <ProductGrid title="Caps" products={caps} />
        </div>
      </div>
    </section>
  )
}

function ProductGrid({ title, products }: { title: string, products: (Connector | Cap)[] }) {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-foreground mb-6">{title}</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  )
}

function ProductCard({ product }: { product: Connector | Cap }) {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
        <Image
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity duration-300"
          width={400}
          height={400}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm font-medium text-foreground">
            <a href="#" className="hover:underline">
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.code}</p>
        </div>
      </div>
    </div>
  )
}


import { Navbar } from "@/components/navbar"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
          <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Your One-Stop Shop for Everything
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              Discover amazing products at great prices. Shop with confidence and enjoy fast delivery.
            </p>
            <div className="space-x-4">
              <Link href="/products">
                <Button size="lg">Shop Now</Button>
              </Link>
              <Link href="/categories">
                <Button variant="outline" size="lg">Browse Categories</Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section - We'll add this later */}
      </main>
    </div>
  )
}

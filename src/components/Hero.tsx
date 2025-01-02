import Link from 'next/link';
import Image from 'next/image';
import { client } from '@/sanity/lib/client';

export default async function Home() {

  const res = await client.fetch("*[_type == 'landingPage'][0].sections[0]{'heroImg' : heroImg.asset->url}")
  const {heroImg} = await res 
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] sm:h-[600px] w-full ">
        <Image
          src={heroImg}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="z-[-1]"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4 sm:px-0 mt-12">
          <h2 className="text-3xl sm:text-6xl font-light tracking-wide mb-3 sm:mt-10 text-center">JEWELLERY BLOG</h2>
          <p className="text-lg sm:text-2xl font-light mb-4 sm:mb-8 text-center">
            Articles by Australian designer Simone Walsh
          </p>
        </div>
      </div>

      {/* Logo */}
      <div className="container mx-auto px-4 py-4 sm:py-6 text-center">
        <Link href="#">
          <h1 className="text-2xl sm:text-3xl font-serif tracking-wide">Simone Walsh</h1>
        </Link>
      </div>
    </div>
  );
}


import Image from 'next/image';
import Link from 'next/link';


const About = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative w-full mb-8" style={{ height: '350px' }}> {/* Set a fixed height */}
        <Image
          src="/about1.webp" 
          alt="About Us Hero"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover"
          priority 
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        {/* Main Content */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8" style={{ backgroundColor: '#f9f5f1' }}>
          <h1 className="text-3xl font-bold text-center mb-2" style={{ color: '#545454' }}>
            LOVE AUSTRALIAN JEWELLERY
          </h1>
          <h2 className="text-2xl font-semibold text-center mb-4" style={{ color: '#545454' }}>
            ABOUT SIMONE WALSH JEWELLERY
          </h2>

          <div className="flex justify-center mb-4"> {/* Center the image */}
            <Image
              src="/about2.webp" // Replace with your about image path
              alt="Jewellery Display"
              width={250} // Adjust as needed
              height={250} // Adjust as needed
              className="rounded-lg object-cover"
              priority
            />
          </div>

          <p className="text-lg leading-relaxed mb-4" style={{ color: '#545454' }}>
            Simone Walsh Jewellery is a celebration of Australian design and craftsmanship. We are passionate about creating unique, high-quality pieces that reflect the natural beauty of our surroundings. Our jewellery is designed to be cherished for years to come.
          </p>
          <p className="text-lg leading-relaxed mb-4" style={{ color: '#545454' }}>
            Each piece is carefully handcrafted using ethically sourced materials. We take pride in our attention to detail and commitment to sustainability.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-center" style={{ color: '#545454' }}>
              OUR VALUES
            </h2>
            <div className="space-y-4">
              <ValueItem title="Australian Made" description="We are proud to design and handcraft all of our jewellery in Australia." />
              <ValueItem title="Ethically Sourced" description="We are committed to using ethically sourced materials and sustainable practices." />
              <ValueItem title="Handcrafted with Love" description="Each piece is made with meticulous care and attention to detail." />
              <ValueItem title="Excellent Customer Service" description="We provide best customer services to our customers." />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Content */}
      <div className="relative w-full mb-8" style={{ height: '350px' }}>
        <Image
          src="/about1.webp" 
          alt="About Us Hero"
          fill
          style={{ objectFit: 'cover' }}
          className="object-cover"
          priority
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-lg shadow-md mb-8" style={{ backgroundColor: '#f9f5f1' }}>
          {/* "In The Beginning" Section */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-4" style={{ color: '#545454' }}>IN THE BEGINNING</h1>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#545454' }}>
                Our story starts with Simone, who has always been drawn towards unique and beautiful things.
            </p>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#545454' }}>
                As a teenager, she would explore the Australian countryside and make jewellery.
            </p>
          </div>

          {/* Timeline Section */}
          <div className="flex justify-between mb-8">
            <div className="text-center" style={{ color: '#545454' }}>
                <h2 className="text-xl font-semibold">START</h2>
            </div>
            <div className="text-center" style={{ color: '#545454' }}>
                <h2 className="text-xl font-semibold">AWs 2006</h2>
            </div>
            <div className="text-center" style={{ color: '#545454' }}>
                <h2 className="text-xl font-semibold">2006</h2>
            </div>
            <div className="text-center" style={{ color: '#545454' }}>
                <h2 className="text-xl font-semibold">2014</h2>
            </div>
            <div className="text-center" style={{ color: '#545454' }}>
                <h2 className="text-xl font-semibold">NOW</h2>
            </div>
          </div>

          {/* "Australian Designer Jewellery" Section */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#545454' }}>AUSTRALIAN DESIGNER JEWELLERY</h2>
            <div className="flex justify-center mb-4">
                <Image
                    src="/mainabout.jpg" 
                    alt="Jewellery Display"
                    width={250}
                    height={250}
                    className="rounded-lg object-cover"
                    priority
                />
            </div>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#545454' }}>
                We create unique Jewellery in silver, gold & gems and have been doing it for over 25 years.
            </p>
            <Link href={'/blog'}>
  <button
    className="bg-transparent hover:bg-pink-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded transition duration-300"
    style={{ color: '#545454', borderColor: '#545454' }}
  >
    VISIT THE SHOP
  </button>
</Link>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};

// Reusable Value Item Component
interface ValueItemProps {
  title: string;
  description: string;
}

const ValueItem = ({ title, description }: ValueItemProps) => (
  <><div className="p-4 rounded-lg mb-2" style={{ backgroundColor: '#fceee5', color: '#545454' }}>
        <h3 className="text-xl font-semibold mb-2" style={{ color: '#545454' }}>
            {title}
        </h3>
        <p className="text-gray-700">{description}</p>
    </div></>
);

export default About;


import Image from "next/image";

const Awards = () => {
  const awards = [
    {
      id: 1,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68216b7561e4643aad470607_great%20place%20to%20work%20colored.svg",
      alt: "Great Place to Work Certified",
      link: "https://www.greatplacetowork.com/certified-company/7053348",
      height: 80,
    },
    {
      id: 3,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68216b75d9b893407848cc38_national%20minority%20supplier%20development%20council%20colored.svg",
      alt: "National Minority Supplier Development Council",
      link: null,
      height: 80,
    },
    {
      id: 4,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68c218edd9ca5bade480c27f_2025-armstrong-and-associates-inc.svg",
      alt: "Armstrong & Associates Top 3PL 2025",
      link: null,
      height: 80,
    },
    {
      id: 5,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68216b75201a0eea0f64a804_best%20and%20brightest%20companies%20colored.svg",
      alt: "Best and Brightest Companies to Work For",
      link: "http://digital.acbusinessmedia.com.s3.amazonaws.com/FLOG/MISC/FLOG0524_Top%203PL%20award%20chart%5B2%5D.pdf",
      height: 80,
    },
    {
      id: 6,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68c0db274c5b90980f714e17_food-logistics-top-2025.svg",
      alt: "Food Logistics Top 3PL & Cold Storage Provider 2025",
      link: null,
      height: 80,
    },
    {
      id: 7,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68bf885cd7fe73eeda7e787c_smartway-transport-partner.svg",
      alt: "SmartWay Transport Partner",
      link: null,
      height: 60,
    },
    {
      id: 8,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68bf885cb840cc0c45328d67_tia-member-2025.svg",
      alt: "TIA Member 2025",
      link: null,
      height: 80,
    },
    {
      id: 9,
      image: "https://cdn.prod.website-files.com/6805c3dd2c11bc5a39f26d4f/68c0dcb8be242750bae01d88_iana-intermodal-association-of-north-america-member%201.svg",
      alt: "IANA Member",
      link: null,
      height: 60,
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-secondary-slate/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-navy mb-4">
            Award-Winning <span className="text-primary-red">Logistics Excellence</span>
          </h2>
          <p className="text-secondary-slate max-w-2xl mx-auto text-lg">
            Recognized by industry leaders for our commitment to reliability, service, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12 items-center justify-items-center">
          {awards.map((award) => (
            <div key={award.id} className="relative group w-full flex justify-center h-24 items-center px-4">
              {award.link ? (
                <a 
                  href={award.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative w-full h-full transition-transform duration-300 hover:scale-105 flex items-center justify-center"
                >
                  <div className="relative w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                  </div>
                </a>
              ) : (
                <div className="relative w-full h-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-105 cursor-default">
                   <Image
                      src={award.image}
                      alt={award.alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 150px, 200px"
                    />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;

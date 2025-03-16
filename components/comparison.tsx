import { classicFeatures, Feature, softlineFeatures } from "@/constants";
import Image from "next/image";

function FeatureElement({ feature }: { feature: Feature }) {
  return (
    <li className="flex items-center space-x-3">
      <div className="bg-[#918F90] w-11 h-11 text-primary-foreground flex items-center justify-center shrink-0">
        <Image
          src={feature.icon}
          alt={feature.description}
          width={20}
          height={20}
        />
      </div>
      <span className="text-sm text-gray-700">{feature.description}</span>
    </li>
  );
}

function ImageGrid({ images }: { images: string[] }) {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      {images.map((src, index) => (
        <div key={index} className="flex justify-center items-center">
          <Image
            src={src}
            alt={`Image ${index}`}
            width={500}
            height={500}
            className="object-contain max-w-full rounded-lg"
          />
        </div>
      ))}
    </div>
  );
}

export default function Comparison() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Porównanie
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Classic vs Softline
          </p>
        </div>
        <div className="mt-16">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {[
              {
                name: "Classic",
                features: classicFeatures,
                images: ["/lol/class.png", "/lol/class-raw.png"],
              },
              {
                name: "Softline",
                features: softlineFeatures,
                images: ["/lol/soft.png", "/lol/soft-raw.png"],
              },
            ].map((section) => (
              <div key={section.name}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {section.name}
                </h2>
                <div className="border rounded-lg p-6 shadow-xl bg-white hover:shadow-2xl transition-shadow duration-300">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {section.features.map((feature, index) => (
                      <FeatureElement feature={feature} key={index} />
                    ))}
                  </ul>
                  <ImageGrid images={section.images} />
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

import React from "react";

interface PricingPlan {
  title: string;
  price: string;
  features: string[];
}

interface PricingPlansProps {
  pricingPlans: PricingPlan[];
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ pricingPlans }) => {
  return (
    <section className="py-20 bg-zinc-900 text-white">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">
          Pricing Plans
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map(({ title, price, features }, index) => (
            <div
              key={index}
              className="bg-zinc-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="font-heading font-black text-2xl">{title}</h3>
              <p className="text-xl text-zinc-400 mt-4">{price}</p>
              <ul className="mt-6 space-y-2 text-left">
                {features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-zinc-400">
                    - {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
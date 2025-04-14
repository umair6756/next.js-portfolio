const plans = [
    {
      title: "Standard",
      price: "$19/month",
      features: [
        "Mobile App Design",
        "Responsive Design",
        "Database Development",
        "Web Design",
        "24/7 Support",
      ],
      color: "bg-green-600",
      btnText: "Get Standard",
    },
    {
      title: "Professional",
      price: "$29/month",
      features: [
        "Mobile App Design",
        "Responsive Design",
        "Database Development",
        "Web Design",
        "24/7 Support",
      ],
      color: "bg-green-600",
      btnText: "Get Pro",
    },
    {
      title: "Business",
      price: "$39/month",
      features: [
        "Mobile App Design",
        "Responsive Design",
        "Database Development",
        "Web Design",
        "24/7 Support",
      ],
      color: "bg-green-600",
      btnText: "Get Business",
    },
  ];
  
  export default function PricingPlans() {
    return (
      <section className=" text-white py-20 px-6">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-bold mb-12">Choose a Plan</h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className="bg-zinc-900 px-0 py-18 flex flex-col items-center"
              >
                <div className={`w-10 h-10 mb-4 rounded-full ${plan.color}`}></div>
                <h3 className="text-4xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-2xl mb-6">{plan.price}</p>
                <ul className="text-md text-gray-300 mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className={`${plan.color} px-6 py-2 rounded-full text-white font-medium`}>
                  {plan.btnText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
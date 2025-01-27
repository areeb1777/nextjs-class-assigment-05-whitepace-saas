import React from 'react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    description: 'Capture ideas and find them quickly',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    bgColor: 'bg-white',
    textColor: 'text-black',
    hoverBgColor: 'hover:bg-[#043873]',
    hoverTextColor: 'group-hover:text-white',
    priceColor: 'text-black',
    hoverPriceColor: 'group-hover:text-[#ffe492]',
  },
  {
    name: 'Personal',
    price: '$11.99',
    description: 'Keep home and family on track',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    bgColor: 'bg-white',
    textColor: 'text-black',
    hoverBgColor: 'hover:bg-[#043873]',
    hoverTextColor: 'group-hover:text-white',
    priceColor: 'text-black',
    hoverPriceColor: 'group-hover:text-[#ffe492]',
  },
  {
    name: 'Organization',
    price: '$49.99',
    description: 'Capture ideas and find them quickly',
    features: [
      'Sync unlimited devices',
      '10 GB monthly uploads',
      '200 MB max. note size',
      'Customize Home dashboard and access extra widgets',
      'Connect primary Google Calendar account',
      'Add due dates, reminders, and notifications to your tasks',
    ],
    bgColor: 'bg-white',
    textColor: 'text-black',
    hoverBgColor: 'hover:bg-[#043873]',
    hoverTextColor: 'group-hover:text-white',
    priceColor: 'text-black',
    hoverPriceColor: 'group-hover:text-[#ffe492]',
    hoverbtnColor: 'hover:bg-black',
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="w-full max-w-[1440px] min-h-[1272px] px-4 md:px-8 lg:px-20 xl:px-32 py-[140px] flex flex-col justify-center items-center gap-[60px] mx-auto">
      <div className="self-stretch flex flex-col justify-start items-center gap-6">
        <div className="self-stretch text-center text-[#212529] text-4xl md:text-7xl font-bold font-['DM Sans']">
          Choose Your Plan
        </div>
        <div className="w-full md:w-[334.73px] h-[4px] md:h-[8px] bg-yellow-200"></div>
        <div className="w-full md:w-[979px] text-center text-[#212529] text-base md:text-lg font-normal font-['DM Sans'] leading-[30px]">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </div>
      </div>
      <div className="self-stretch flex flex-col md:flex-row justify-center items-center gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`flex-1 px-6 py-10 ${plan.bgColor} ${plan.textColor} rounded-[10px] border border-[#ffe492] flex flex-col justify-center items-start gap-[25px] ${plan.hoverBgColor} group transition-colors duration-300`}
          >
            <div className="self-stretch flex flex-col justify-start items-start gap-[25px]">
              <div className={`self-stretch ${plan.textColor} ${plan.name === 'Free' || plan.name === 'Personal' || plan.name === 'Organization' ? 'group-hover:text-[#ffe492]' : plan.hoverTextColor} text-2xl font-semibold font-['DM Sans'] leading-9`}>
                {plan.name}
              </div>
              <div className={`self-stretch ${plan.priceColor} ${plan.hoverPriceColor} text-4xl font-bold font-['DM Sans']`}>
                {plan.price}
              </div>
              <div className={`self-stretch ${plan.textColor} ${plan.hoverTextColor} text-lg font-medium font-['DM Sans'] leading-[23px]`}>
                {plan.description}
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-7">
              {plan.features.map((feature, i) => (
                <div key={i} className="self-stretch flex justify-start items-center gap-[19px]">
                  <div className={`w-[18.01px] h-[18.01px] relative ${plan.textColor} ${plan.hoverTextColor} rounded-full`}></div>
                  <div className={`flex-1 ${plan.textColor} ${plan.hoverTextColor} text-base font-normal font-['DM Sans'] leading-tight`}>
                    {feature}
                  </div>
                </div>
              ))}
            </div>
            <div className={`px-10 py-4 ${plan.bgColor} ${plan.hoverBgColor} rounded-lg border border-[#ffe492] flex justify-center items-center`}>
              <p className={`text-base font-medium font-['DM Sans'] ${plan.textColor} ${plan.hoverbtnColor}`}>Get Started</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;

import Image from "next/image";
const Companies = () => {
  const companies = [
    {
      name: "zendesk",
      logo: "/images/companies/zendesk.png",
    },
    {
      name: "uber",
      logo: "/images/companies/uber.png",
    },
    {
      name: "meero",
      logo: "/images/companies/meero.png",
    },
    {
      name: "sumo",
      logo: "/images/companies/sumo.png",
    },
  ];

  return (
    <div className="relative py-20 max-w-4xl m-auto">
      <div className="flex flex-row justify-center items-center max-md:flex-wrap gap-10">
        {companies.map((company, index) => {
          return (
            <div key={index} className="relative w-full h-12">
              <Image
                src={company.logo}
                fill
                alt={company.name}
                className="object-contain w-full h-full p-2"
              />
            </div>
          );
        })}
        
      </div>
    </div>
  );
};

export default Companies;

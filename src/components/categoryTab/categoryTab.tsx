"use client";
import { useState } from 'react';
import ProductCarousel from '@/components/categoryTab/productCarousel';


type Tab = {
    id: string;
    label: string;
  };
  const CategoryTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');
  
    const renderContent = () => {

      const IndustryArray = [
        {
        category:"Industry-1" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        link: "#"
        },
        {
          category:"Industry-2" ,
          img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
          link: "#"
          },
          {
            category:"Industry-3" ,
            img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
            link: "#"
            },
            {
              category:"Industry-4" ,
              img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
              link: "#"
              },
              {
                category:"Industry-5" ,
                img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
                link: "#"
                },
                {
                  category:"Industry-6" ,
                  img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
                  link: "#"
                  },

    ];
    const ApplicationArray = [
      {
      category:"Application-1" ,
      img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      link: "#"
      },
      {
        category:"Application-2" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        link: "#"
        },
        {
          category:"Application-3" ,
          img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
          link: "#"
          },
          {
            category:"Application-4" ,
            img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
            link: "#"
            },
            {
              category:"Application-5" ,
              img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
              link: "#"
              },
              {
                category:"Application-6" ,
                img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
                link: "#"
                }

  ];
    const ChemicalArray = [
      {
      category:"Chemical-1" ,
      img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
      link: "#"
      },
      {
        category:"Chemical-2" ,
        img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
        link: "#"
        },
        {
          category:"Chemical-3" ,
          img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
          link: "#"
          },
          {
            category:"Chemical-4" ,
            img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
            link: "#"
            },
            {
              category:"Chemical-5" ,
              img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
              link: "#"
              },
              {
                category:"Chemical-6" ,
                img:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
                link: "#"
                },

  ];



      switch (activeTab) {
        case 'tab1':
          return <ProductCarousel linkArray={IndustryArray} />;
        case 'tab2':
          return <ProductCarousel linkArray={ChemicalArray} />;
        case 'tab3':
          return <ProductCarousel linkArray={ApplicationArray} />;
        default:
          return <p>Content not available.</p>;
      }
    };
  
    const tabs: Tab[] = [
      { id: 'tab1', label: 'Industry' },
      { id: 'tab2', label: 'Chemistry' },
      { id: 'tab3', label: 'Application' },
    ];

  return (
    <div className="flex flex-col py-10 px-0 container max-w-[1048px] m-auto">
      <h2 className="uppercase text-green-800 text-center font-bold text-lg md:text-xl">Find your product</h2>
    <div className="flex items-center justify-center w-full py-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-[130px] h-10 ${activeTab === tab.id ? 'text-white  bg-red-600 hover:bg-red-800 rounded-full' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  )
}

export default CategoryTab

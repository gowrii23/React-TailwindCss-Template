import React, { useState } from 'react';

const images = [
  {
    url: 'images/1.jpg',
    title: 'ET',
    description: 'Excellent service from start to finish. We had Gary do a pergola and carport for us recently. We are very pleased with Gary’s work. He is very honest and trustworthy and I would not hesitate to recommend him to others. Thanks Gary!',
  },
  {
    url: 'images/2.jpg',
    title: 'Will Li',
    description: "My wife and I couldn't be happier with the carport Gary and his dad built for us. Gary really went the extra mile, even helping us chop down a bunch of tree branches to fit the carport, and he didn't charge us anything extra for it. Talking to Gary is super easy because he's not just a nice guy, he's genuinely caring. He's very skilled and professional, and his prices are very reasonable. We'd recommend him in a heartbeat!",
  },
  {
    url: 'images/3.jpg',
    title: 'Michelle Mansueto',
    description: 'I was very impressed with garys work. My pergola looks great and very professionally sone',
  },
  {
    url: 'images/4.jpg',
    title: 'Shamsheer Verma',
    description: 'Recently Gary worked on our property in Ingleburn to build patio and full glass sunroom. He has done an amazing job and quality workmanship based all in spot on pricing. He is quite accomodating to requests and humble in providing in suggestions that will improve the overall outlook and design of sunroom.',
  },
  {
    url: 'images/5.jpeg',
    title: 'Gary naji',
    description: 'Worked by Gary',
  },
  {
    url: 'images/6.jpg',
    title: 'Thanh Truong-Do',
    description: 'Gary helped us to build a composite deck and insulated pergola. The results turned out amazing due to his attention to detail. He supported us along the process and even jumped up on the roof and gave us a few recommendations. A+ customer experience and he went above and beyond. Definitely recommending him to family and friends.',
  },
  {
    url: 'images/7.jpg',
    title: 'P Panico',
    description: 'Garry did a fantastic job to extend our existing Stratco pergola. He cares a lot about his work and the customer and is very good tradesman. Fair price too. I would happily recommend Garry to anyone. Thank you again, Regards Paul',
  },
  {
    url: 'images/8.jpg',
    title: 'Ganesh Radhakrishnan',
    description: 'Gary did an extended car port for my place. He was professional, clear and trustworthy. I found the quote from him as nominal. Highly recommend his company for this kind of work.',
  },
  {
    url: 'images/9.jpg',
    title: 'Anm Rahman',
    description: 'Image by Customer.',
  },
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showImage = (index) => {
    setCurrentIndex(index);
  };

  const showPrevImage = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    showImage(index);
  };

  const showNextImage = () => {
    const index = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    showImage(index);
  };

  return (
    
    <section>
       <div className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-8">
            <h2 className="text-3xl leading-tight font-bold">Reviews by Customer</h2>
        </div>  

      <div className="relative w-full overflow-hidden">
        <div className="flex items-center justify-center" id="image-container">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative w-full flex-shrink-0"
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            >
              <img src={image.url} alt={image.title} className="mx-auto w-full md:w-auto object-cover" />
              <div className="absolute inset-0 flex items-center justify-between">

              <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={showPrevImage} >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 dark:bg-white-800/60 group-hover:bg-teal/50 dark:group-hover:bg-teal-800/100 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-teal-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={showNextImage} >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/60 dark:bg-white-800/60 group-hover:bg-teal/50 dark:group-hover:bg-teal-800/100 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-teal-800/70 group-focus:outline-none">
                        <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
              
              </div>
              <div className="p-4 bg-gray-200 text-center">
                <h2 className="text-lg font-bold">{image.title}</h2>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;

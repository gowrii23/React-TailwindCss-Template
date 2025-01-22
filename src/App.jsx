import { useState } from 'react'
import ImageCarousel from './ImageCarousel';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count, setCount] = useState(0)

  return (

    <main className="w-full">

 
    <header className="absolute top-0 left-0 w-full z-50 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64">
      <div className="hidden md:flex justify-between items-center py-2 border-b text-sm py-3"
        >
        <div className="">
          <ul className="flex text-white">
            <li>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path
                    d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z" />
                </svg>

                <span className="ml-2"></span>
                <span className="ml-2">Talk to Expert Gary: </span>
              </div>
            </li>
            <li className="ml-6">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current text-white" viewBox="0 0 24 24">
                  <path
                    d="M14.594,13.994l-1.66,1.66c-0.577-0.109-1.734-0.471-2.926-1.66c-1.193-1.193-1.553-2.354-1.661-2.926l1.661-1.66 l0.701-0.701L5.295,3.293L4.594,3.994l-1,1C3.42,5.168,3.316,5.398,3.303,5.643c-0.015,0.25-0.302,6.172,4.291,10.766 C11.6,20.414,16.618,20.707,18,20.707c0.202,0,0.326-0.006,0.358-0.008c0.245-0.014,0.476-0.117,0.649-0.291l1-1l0.697-0.697 l-5.414-5.414L14.594,13.994z" />
                </svg>

                <span className="ml-2">+61 415-512-800</span>
              </div>
            </li>
          </ul>
        </div>

        <div className="">
          <ul className="flex justify-end text-white">
            <li>
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path
                    d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h8.615v-6.96h-2.338v-2.725h2.338v-2c0-2.325,1.42-3.592,3.5-3.592	c0.699-0.002,1.399,0.034,2.095,0.107v2.42h-1.435c-1.128,0-1.348,0.538-1.348,1.325v1.735h2.697l-0.35,2.725h-2.348V21H20	c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z">
                  </path>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path
                    d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809	c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793	c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05	c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032	c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028	c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22	c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z">
                  </path>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path
                    d="M20.947,8.305c-0.011-0.757-0.151-1.508-0.419-2.216c-0.469-1.209-1.424-2.165-2.633-2.633 c-0.699-0.263-1.438-0.404-2.186-0.42C14.747,2.993,14.442,2.981,12,2.981s-2.755,0-3.71,0.055 c-0.747,0.016-1.486,0.157-2.185,0.42C4.896,3.924,3.94,4.88,3.472,6.089C3.209,6.788,3.067,7.527,3.053,8.274 c-0.043,0.963-0.056,1.268-0.056,3.71s0,2.754,0.056,3.71c0.015,0.748,0.156,1.486,0.419,2.187 c0.469,1.208,1.424,2.164,2.634,2.632c0.696,0.272,1.435,0.426,2.185,0.45c0.963,0.043,1.268,0.056,3.71,0.056s2.755,0,3.71-0.056 c0.747-0.015,1.486-0.156,2.186-0.419c1.209-0.469,2.164-1.425,2.633-2.633c0.263-0.7,0.404-1.438,0.419-2.187 c0.043-0.962,0.056-1.267,0.056-3.71C21.003,9.572,21.003,9.262,20.947,8.305z M11.994,16.602c-2.554,0-4.623-2.069-4.623-4.623 s2.069-4.623,4.623-4.623c2.552,0,4.623,2.069,4.623,4.623S14.546,16.602,11.994,16.602z M16.801,8.263 c-0.597,0-1.078-0.482-1.078-1.078s0.481-1.078,1.078-1.078c0.595,0,1.077,0.482,1.077,1.078S17.396,8.263,16.801,8.263z">
                  </path>
                  <circle cx="11.994" cy="11.979" r="3.003"></circle>
                </svg>
              </a>
            </li>

            <li className="ml-6">
              <a href="#" target="_blank" title="">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                  <path
                    d="M21.593,7.203c-0.23-0.858-0.905-1.535-1.762-1.766C18.265,5.007,12,5,12,5S5.736,4.993,4.169,5.404	c-0.84,0.229-1.534,0.921-1.766,1.778c-0.413,1.566-0.417,4.814-0.417,4.814s-0.004,3.264,0.406,4.814	c0.23,0.857,0.905,1.534,1.763,1.765c1.582,0.43,7.83,0.437,7.83,0.437s6.265,0.007,7.831-0.403c0.856-0.23,1.534-0.906,1.767-1.763	C21.997,15.281,22,12.034,22,12.034S22.02,8.769,21.593,7.203z M9.996,15.005l0.005-6l5.207,3.005L9.996,15.005z">
                  </path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between py-6">
        <div className="w-1/2 md:w-auto">
          <a href="index.html" className="text-white font-bold text-2xl">
          {/* PERGOLAS & PATIOS */}
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block"><svg className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg></label>

        <input className="hidden" type="checkbox" id="menu-toggle"/>

        <div className="hidden md:block w-full md:w-auto" id="menu">
          <nav
            className="w-full bg-slate-300 md:bg-transparent rounded shadow-lg px-6 py-4 mt-4 text-center md:p-0 md:mt-0 md:shadow-none">
            <ul className="md:flex items-center">
              <li><a className="py-2 inline-block md:text-white md:hidden lg:block font-semibold"
                  href="#about">About Us</a></li>
              <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold"
                  href="#gallery">Gallery</a></li>
              <li className="md:ml-4"><a className="py-2 inline-block md:text-white md:px-2 font-semibold" href="#contact">Contact
                  Us</a></li>
              <li className="md:ml-6 mt-3 md:mt-0">
                <a className="inline-block font-semibold px-4 py-2 text-white bg-blue-600 md:bg-transparent md:text-white border border-white rounded"
                  href="book-appointment.html"> +61 415-512-800 </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

   
    <div className="">
          <section className="cover bg-gradient-to-r from-gray-950 to-gray-600  relative  px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex items-center min-h-screen">
        <div className="h-full absolute top-0 left-0 z-0">
          <img src="images/13.jpg" alt="" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">PERGOLAS & PATIOS</h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">
              Our prices are affordable and all our products are Australian made. We offer a range of pergolas and carports and decks to expand your possibilities for entertaining, relaxing, storage, or simply enjoying your garden, and protecting you and your property from the elements.
            </p>
            {/* <button
              onClick={() => window.open('https://web.whatsapp.com/send?phone=61415512800&text=', '_blank')}
              className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold"
            >
              Book Appointment
            </button> */}

             <div className="flex items-center space-x-2 mt-8">
              <a href="https://web.whatsapp.com/send?phone=61415512800&text=" target="_blank" rel="nofollow noopener" aria-label="Whatsapp" className="flex items-center px-8 py-4 bg-teal-500 text-white rounded font-semibold" data-form="chaty-form-0-Whatsapp" data-hover="WhatsApp" data-text="Get a Quote!">
              <span class="chaty-icon channel-icon-Whatsapp"><span class="chaty-svg">
                <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg"><circle class="color-element" cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670"></circle><path d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z" transform="translate(12.9597 12.9597)" fill="#FAFAFA"></path><path d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z" transform="translate(7.7758 7.77582)" fill="white" stroke="white" stroke-width="0.2"></path></svg>
                </span></span>
                <span class="on-hover-text">Book Appointment</span></a></div>
            </div>
        </div>
      </section>

    </div>

   
    <section id="about" className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-20" >
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">15 year warranty on all workmanship.
          </h2>
          <p className="text-lg mt-4 font-semibold">We specialise in all roofing styles including flat, gable or dome using 100% Australian made materials.</p>
          <p className="mt-2 leading-relaxed">  Very competitive pricing with reliable and friendly service.</p>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
          <div className="md:flex">
            <div>
              <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">We are qualified, licensed and insured traders
              </h4>
              <p className="mt-2 leading-relaxed">Do you Need a cover to protect your car and house frome the heat and the rain? We are here to design and build you all types of pergolas and carport with very cheep prices.</p>
            </div>
          </div>

          <div className="md:flex mt-8">
            <div>
              <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">Having been in business since 2009 and with over 15,000 satisfied customers. </h4>
              <p className="mt-2 leading-relaxed">Our team is available now to help design and discuss your space. Supported by a team of specialist professionals, you can rest assured your job will be designed and built within time and on budget from the design through to completion. </p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        <div className="md:w-1/2 md:px-4 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/insulated.png" alt="" className="h-20 mx-auto"/>

            <h4 className="text-xl font-bold mt-4">Insulated Panel Roof</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            {/* <a href="#" className="block mt-4">Read More</a>  */}
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/colorbond.jfif" alt="" className="h-20 mx-auto"/>

            <h4 className="text-xl font-bold mt-4">Colourbond Roof</h4>
            <p className="mt-1">Let us show you how our experience in Colour bond Roof.</p>
            {/*  <a href="#" className="block mt-4">Read More</a> */}
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/curve.jfif" alt="" className="h-20 mx-auto"/>

            <h4 className="text-xl font-bold mt-4">Curved Roof</h4>
             <p className="mt-1">Let us show you how our experience in Curved Rood.</p>
            {/* <a href="#" className="block mt-4">Read More</a> */}
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/sunroom.jpg" alt="" className="h-20 mx-auto"/>

            <h4 className="text-xl font-bold mt-4">Sunroom / Decking</h4>
             <p className="mt-1">Let us show you how our experience.</p>
           {/* <a href="#" className="block mt-4">Read More</a> */}
          </div>
        </div>
      </div>
    </section>


      <section id="gallery" className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-0">
    <div className="">
      <h2 className="text-3xl leading-tight font-bold">Gallery</h2>
      <p className="text-gray-600 mt-2 md:max-w-lg">You’ll be absolutely amazed at the difference we will make to your lifestyle by turning your unused outdoor space into a useable and functional area that your family can use every day.</p>
      <a href="#" title="" className="inline-block text-teal-500 font-semibold mt-6 mt:md-0">Book Appointment</a>
    </div>

    <div className="md:flex mt-12 md:-mx-4">
      <div className="md:px-4 md:w-1/2 xl:w-1/4">
        <div className="bg-white rounded border border-gray-300">
          <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-300">
            <img src="images/1.jpg" alt="sunroof" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm">
              <span className="text-teal-500 font-semibold">Customer</span>
              <span className="ml-4 text-gray-600"> </span>
            </div>
            <p className="text-lg font-semibold leading-tight mt-4">Sun Roof</p>
            <p className="text-gray-600 mt-1">Excellent service from start to finish. We had Gary do a pergola and carport for us recently. We are very pleased with Gary’s work. He is very honest and trustworthy and I would not hesitate to recommend him to others. Thanks Gary!</p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
              <div className="ml-4">
                <p className="text-gray-600">By <span className="text-gray-900 font-semibold">ET</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
        <div className="bg-white rounded border border-gray-300 ">
          <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-300">
            <img src="images/2.jpg" alt="stylish" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm">
              <span className="text-teal-500 font-semibold">Customer</span>
              <span className="ml-4 text-gray-600"> </span>
            </div>
            <p className="text-lg font-semibold leading-tight mt-4">Insulated Roof</p>
            <p className="text-gray-600 mt-1">Gary really went the extra mile, even helping us chop down a bunch of tree branches to fit the carport, and he didn't charge us anything extra for it.  He's very skilled and professional, and his prices are very reasonable.</p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
              <div className="ml-4">
                <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Will Li</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
        <div className="bg-white rounded border border-gray-300 ">
          <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-300">
            <img src="images/3.jpg" alt="stylish" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm">
              <span className="text-teal-500 font-semibold">Customer</span>
              <span className="ml-4 text-gray-600"> </span>
            </div>
            <p className="text-lg font-semibold leading-tight mt-4">Roof</p>
            <p className="text-gray-600 mt-1">I was very impressed with garys work. My pergola looks great and very professionally done. He's very skilled and professional, and his prices are very reasonable. We'd recommend him in a heartbeat!</p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
              <div className="ml-4">
                <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Michelle Mansueto</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
        <div className="bg-white rounded border border-gray-300 ">
          <div className="w-full h-64 md:h-80 overflow-hidden bg-gray-300">
            <img src="images/4.jpg" alt="stylish" className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <div className="flex items-center text-sm">
              <span className="text-teal-500 font-semibold">Customer</span>
              <span className="ml-4 text-gray-600"> </span>
            </div>
            <p className="text-lg font-semibold leading-tight mt-4">Insulated Roof</p>
            <p className="text-gray-600 mt-1">Recently Gary worked on our property in Ingleburn to build patio and full glass sunroom. He has done an amazing job and quality workmanship. He is quite accomodating and humble in providing in suggestions.</p>
            <div className="flex items-center mt-4">
              <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
              <div className="ml-4">
                <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Shamsheer Verma</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>



    <section>
        <ImageCarousel/>
    </section>

    <footer id="contact" className="relative bg-gray-900 text-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 lg:py-24">
    <div className="flex flex-col items-center">
        <div className="w-full md:w-1/4 lg:w-1/3 mt-8 lg:mt-0 lg:pr-8 text-center">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500">Contact Details</h5>
            <ul className="mt-4">
                <li>
                    <a href="#" title="" className="block flex items-center justify-center opacity-75 hover:opacity-100">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12,2C7.589,2,4,5.589,4,9.995C3.971,16.44,11.696,21.784,12,22c0,0,8.029-5.56,8-12C20,5.589,16.411,2,12,2z M12,14 c-2.21,0-4-1.79-4-4s1.79-4,4-4s4,1.79,4,4S14.21,14,12,14z"/>
                            </svg>
                        </span>
                        <span className="ml-3">6 Humphreys Ave, Casula NSW 2170</span>
                    </a>
                </li>
               
                <li className="mt-4">
                    <a href="#" title="" className="block flex items-center justify-center opacity-75 hover:opacity-100">
                        {/* <span className="ml-3">Phone (+61 415-512-800 ) </span> */}
                    </a>
                </li>
            </ul>
        </div>
        <div className="w-full mt-8 lg:mt-4">
            <h5 className="uppercase tracking-wider font-semibold text-gray-500 text-center"></h5>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d827.501209419203!2d150.90584366963608!3d-33.94100368572696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295aa3c9bc40f%3A0xd7dca0374ffbc676!2spergolas%20and%20patios!5e0!3m2!1sen!2sin!4v1736064709911!5m2!1sen!2sin"
                width="100%"
                height="450"
                allowFullScreen=""
                loading="lazy"
                title="Pergolas and Patios"
            ></iframe>
        </div>
        
                    <a href="#" title="" className="block flex items-center justify-center opacity-100 hover:opacity-100">
                         <span className="ml-3">Phone (+61 415-512-800 ) </span> 
                    </a>
        
    </div>
</footer>


    </main>
  )
}

export default App

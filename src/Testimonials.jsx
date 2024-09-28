import React from 'react'
import { Link } from "react-router-dom";

import './Test.css';
const Testimonials = () => {
  return (
    <div>
      <body className="bg-[#DCEBF0]  ">

<header id="top" className="fixed py-2  top-0 left-0 right-0 bg-[#1C96C3] text-white z-40">
    <nav className="header-content flex justify-between items-center align-middle px-4 space-x-7">
        <div id="logo">
            <a href="index.html"><img className="w-36  lg:w-40" src="images/output-onlinepngtools (1).png" alt="Logo"/></a>
        </div>

        
        <ul id="nav-menu" className="un-content hidden md:flex md:justify-between space-x-7 text-white">
            <li className="hovering sm:text-xl md:text-2xl font-semibold">   <Link to="/home">HOME</Link></li>
            <li><a className="hovering sm:text-xl md:text-2xl font-semibold" href="index.html/#program">PRODUCT</a></li>
            <li><a className="hovering sm:text-xl md:text-2xl font-semibold" href="shop.html">SHOP</a></li>
            <li><a className="hovering sm:text-xl md:text-2xl font-semibold" href="#price">PLANS</a></li>
           
            
        </ul>
        
        


         <div className="text-white"> <svg id="menu-icon" className="md:hidden w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg></div>
       
    </nav>

    
    <ul id="dropdown-menu" className="hidden flex-col bg-white font-semibold text-[#018ABD] space-y-2 text-lg px-6 py-4 absolute w-full top-16 left-0 shadow-lg md:hidden">
        <li><a href="index.html">HOME</a></li>
        <li><a href="#">PRODUCTS</a></li>
        <li><a href="shop.html">SHOP</a></li>
        <li><a href="#price">PLANS</a></li>
        <li><a href="testimonials.html">TESTIMONIALS</a></li>
    </ul>
</header>
<section className="flex justify-center align-middle">
    <section className="pt-24 w-11/12 mx-auto ">
        <div className="text-center md:flex md:justify-center md:align-top md:items-start">
            <div className="text-[#018ABD] text-xl font-semibold">Write A Review:</div>
            <div className="px-3 py-10 md:px-4 lg:px-2 md:py-0 md:w-full lg:w-full">
                <textarea className="w-full h-12 md:h-60 lg:h-[400px] xl:h-[400px] border border-gray-300 rounded-md p-1 md:p-5  " type="text" placeholder="Enter your review here"></textarea>
            </div>
        </div>
    
        <div className="flex justify-center align-middle items-center md:w-[100px] md:mt-16 cursor-pointer w-2/4 mx-auto py-2 text-white rounded-md bg-black"><input required  type="submit"/></div>
    </section>
</section>




<section className="pt-10 pb-8">
    <div className="w-4/5 mx-auto ">
        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up">
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (1).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2" >
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "Joining this gym was the best decision I made for my health. The trainers are incredibly supportive, and the community atmosphere keeps me motivated every day."
                        <br /><span className="font-semibold flex justify-end">-John D.</span>
                    </p>
                </div>
            </div>
        </div>

        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up">
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (3).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "The community here is fantastic. I’ve made great friends and found accountability partners that keep me on track. It’s more than just a gym; it’s a family."
                        <br /><span className="font-semibold flex justify-end">-David.S</span>
                    </p>
                </div>
            </div>
        </div>


        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up">
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (2).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "The equipment is top-notch, and the gym is always clean and well-maintained. I’ve seen amazing results in just a few months of consistent training here."
                        <br /><span  className="font-semibold flex justify-end">-Mike K</span>
                    </p>
                </div>
            </div>
        </div>

        
        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up">
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (4).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2" >
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "What sets this gym apart is the attention to detail. The coaches make sure you’re using the correct form, which has helped me avoid injuries and see better results."
                        <br /><span className="font-semibold flex justify-end">-Kenny J</span>
                    </p>
                </div>
            </div>
        </div>


        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up">
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (5).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "I love the variety of classNamees offered, from yoga to HIIT. There’s something for everyone, and the instructors really know how to push you to your limits."
                        <br /><span className="font-semibold">-Ganesh</span>
                    </p>
                </div>
            </div>
        </div>


        <div className="flex flex-col md:justify-around md:flex-row justify-between space-y-4 mt-10 md:space-y-0 md:space-x-2" data-aos="fade-up" >
            
            <div className="w-2/4 md:w-[20%]">
                <img className="w-full" src="images/image (6).png" alt="Gym Image"/>
            </div>

            
            <div className="bg-white px-4 py-2 rounded-xl shadow-md md:w-1/2">
                <div className="flex justify-between items-start mb-4">
                    <div className="w-[20%]">
                        <img className="w-full" src="images/five-stars-rating-icon-png - Copy.webp" alt="Rating Stars"/>
                    </div>
                    <div className="flex items-center text-center text-[8px] md:text-[15px] text-gray-500">2 months ago</div>
                </div>
                <div className="text-wrap w-full">
                    <p className="text-sm  leading-relaxed text-gray-700 md:text-2xl font-semibold ">
                        "I’ve been to many gyms, but this one stands out. The focus on proper technique and overall health, not just fitness, is what keeps me coming back."
                        <br /><span className="font-semibold">-Tom Hardley</span>
                    </p>
                </div>
            </div>
        </div>

    </div>
</section>
<footer className="bg-[#30B0C7] py-10">
        <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
 
          <div className="flex flex-col items-center lg:items-start">
            <img className="foot cursor-pointer w-1/2 md:w-[80%] h-auto" src="images/output-onlinepngtools (1).png" alt=""/>
            <div className="mt-5">
              <img className="cursor-pointer" src="images/App store.png" alt=""/>
            </div>
            <div className="mt-5">
              <img className="cursor-pointer" src="images/Group 41.png" alt=""/>
            </div>
          </div>
      
           <div className="flex justify-center align-middle md:inline-block ">
            <div>
              <div className="text-xl font-semibold text-center lg:text-left">CONTACT US</div>
              <div className="mt-4 flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <span className="ml-3">mganeshram2005@gmail.com</span>
              </div>
              <div className="mt-4 flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <span className="ml-3">91+7010571601</span>
              </div>
              <div className="mt-4 flex items-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className="ml-3 w-[200px]">3/1754 Central Grand Station, Los Angeles, London, USA</span>
              </div>
            </div>
           </div>

      
   
          <div className="text-center lg:text-left ">
            <h1 className="text-xl font-semibold text-white">NEWSLETTER</h1>
            <p className="text-xl text-white md:w-[156px]">Don’t miss out on the latest news and offers - sign up today and join our thriving fitness community!</p>
          </div>
      
   
          <div className="text-center">
            <h1 className="text-xl font-semibold text-white mb-4">SOCIAL MEDIA</h1>
            <div className="flex justify-center space-x-5">
              <img className="w-10 cursor-pointer" src="images/mdi--instagram 1.png" alt=""/>
              <img className="w-10 cursor-pointer" src="images/ic--baseline-facebook 1.png" alt=""/>
              <img className="w-10 cursor-pointer" src="images/mdi--twitter 1.png" alt=""/>
            </div>
          </div>
      
        </div>
  </footer>


</body>

      
    </div>
  )
}

export default Testimonials

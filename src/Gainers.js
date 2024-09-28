import React from 'react'
import './shop.css'
import { Link } from "react-router-dom";

const Gainers = () => {
  return (
    <div>

<body className="pb-48">
    <header className="bg-[#018ABD] z-50 py-5 fixed right-0 left-0">
        <nav className="flex md:justify-between justify-around gap-14 align-middle items-center w-4/5 mx-auto">
        <div className="hidden md:block bg-white py-[3px] px-6 sm:px-10 font-semibold sm:py-1 rounded-md text-base sm:text-xl text-[#1C96C3] ">
                
                <Link to="/home">HOME</Link>
            </div>
        
            <div className="virtual sm:hidden text-white">
                <svg id="menu-button" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>
            
            <div className="md:w-full lg:w-[70%]">
                <div className="search-container">
                    <img className="search_icon h-[20px] md:w-[1.25rem] md:h-[1.25rem] md:left-[0.5rem]" src="images/Vector (4).png" alt="Search Icon"/>
                    <input className="search h-[30px] md:w-[100%] md:h-[2rem] md:pl-[2rem] text-black " type="text" placeholder="Search"/>
                </div>
            </div>
        </nav>
    </header>
    

     {/* <div id="dropdown-menu" className="hidden absolute top-[60px] left-0 w-full bg-white z-10 text-[#018ABD]">
        <ul className="flex flex-col items-center gap-4 p-4">
            <li><a href="index.html" className="font-semibold text-xl">HOME</a></li>
            <li><a href="shop.html" className="font-semibold text-xl">WHEY PROTEIN</a></li>
            <li><a href="vitamins.html" className="font-semibold text-xl">VITAMINS</a></li>
            <li className="font-semibold text-xl"><Link to="/gain" >GAINERS</Link></li>
            <li><a href="test.html" className="font-semibold text-xl">TEST BOOSTERS</a></li>
            <li><a href="weight.html" className="font-semibold text-xl">WEIGHT LOSS</a></li>
        </ul>
    </div>  */}
    
    <nav className="w-4/5 mt-[100px] mx-auto">
        <section className="justify-around hidden md:flex">
            <div  className="text text-2xl cursor-pointer font-semibold"> <Link to="/shop">WHEY PROTIEN</Link></div>
            <div  className="text text-2xl cursor-pointer font-semibold"> <Link to="/vitamin">VITAMINS</Link></div>
            <div  className="text text-2xl cursor-pointer font-semibold">  <Link to="/gain"> GAINERS</Link></div>
            <div  className="text text-2xl cursor-pointer font-semibold"> <Link to="/test1"> TEST BOOSTERS</Link></div>
            <div  className="text text-2xl cursor-pointer font-semibold"> <Link to="/weight"> WEIGHT LOSS</Link></div>
        </section>
    </nav>
    <section className="w-11/12 lg:p-12 flex justify-center align-middle items-center mx-auto mt-10">
        <section className="grid grid-cols-2 gap-6  gap-y-10  md:grid-cols-2 lg:grid-cols-3 ">
           
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 18 (7).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>LABRADA MUSCLE MASS</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>

           
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 17 (7).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>AVVALAR MASS GAINER</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 16 (7).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>SERIOUS MASS</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>


            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 18 (6).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>LABRADA MUSCLE MASS</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>

           
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 17 (6).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>MASS TECH EXTREME 2000</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 16 (6).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>ANABOLIC MASS</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>
            
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 18 (5).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>MASS TECH ELITE</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>

           
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 16 (5).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>MUTANT MASS</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>
            <section className=" px-2 w-[125px] md:w-[300px] rounded-2xl shadow-2xl lg:w-[300px] "data-aos="fade-up">
                <div className="max-w-[100%] object-cover mx-auto"><img className="w-full" src="images/Rectangle 17 (5).png" alt=""/></div>
                <div  className="content md:text-xl font-semibold text-sm"><p>BIOZYME DAILY</p></div>
                <div className="flex justify-between gap-5 pb-3 px-2 align-middle items-center">
                    <div className="text-sm md:text-2xl font-semibold">₹2,999</div>
                    <button className="bg-[#1C96C3] cursor-pointer rounded md:text-2xl text-white butt w-full">BUY NOW</button>
                </div>
            </section>
            
        </section>

            
            
       
           
        
    </section>

    <section className=" mt-6  mx-auto flex justify-center items-center align-middle ">

        <button className=" text-xl w-[80%] lg:w-[40%] rounded-xl bg-[#1C96C3] px-5 text-white py-2">SHOW MORE PRODUCTS</button>
     </section>

</body>

    </div>
  )
}

export default Gainers

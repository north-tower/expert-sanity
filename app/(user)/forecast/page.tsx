import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <section className="w-screen  py-10 ">
  <div className="container mx-auto w-full max-w-screen-xl">
    <div className="w-full"> 
      <h2 className="text-center text-3xl text-blue-500 font-extrabold">Financial Forecasting</h2>
      <p className="mx-auto mb-4 max-w-xl py-2 text-center text-gray-600 sm:text-lg">How does financial forecasting work.</p>
    </div>
    <div  className=" mx-auto py-10 grid max-w-screen-xl grid-cols-1  pl-6 pr-4 sm:px-20
     lg:grid-cols-3">
  <div  className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
    <h1  className="mb-6 text-4xl">How it works..</h1> 
    <p  className="text-gray-600">These steps ensure a structured approach to financial forecasting, providing valuable insights to support strategic decision-making and business planning.</p>
  </div>
  <div  className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-gray-300 p-5 sm:p-10
   md:grid-cols-2 lg:mt-0">
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center
       rounded-full bg-gray-300 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">01</div>
      <div  className=""> 
        <h3  className="text-xl font-semibold">Data Collection and Analysis</h3>
        <p  className="text-gray-600 mt-3">Comprehensive historical financial data, including sales figures, expenses, and cash flow statements, is gathered.
           In-depth analysis uncovers critical trends and patterns influencing the businesss financial performance. 
          This foundational step ensures forecasts are based on accurate and relevant data, providing a solid basis for future projections..</p>
      </div> 
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">02</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Developing Forecasting Models</h3>
        <p  className="text-gray-600 mt-3">Suitable forecasting methods, such as time series analysis, regression analysis, or advanced financial modeling techniques, are selected. Forecasting models are constructed and refined based on robust historical data and pertinent external factors. The choice and customization of models are crucial, as they directly impact the accuracy and reliability of the forecasts.</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">03</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Forecast Generation</h3>
        <p  className="text-gray-600 mt-3">Precise short-term and long-term financial forecasts are generated using validated models and predictive analytics. Scenario analysis is implemented to evaluate potential outcomes across diverse economic scenarios or strategic initiatives. This step provides a range of potential futures, helping prepare for various possibilities and make informed decisions.</p>
      </div>
    </div>
    <div  className="relative flex gap-5">
      <div  className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
      <div  className="">
        <h3  className="text-xl font-semibold">Monitoring and Adjustments</h3>
        <p  className="text-gray-600 mt-3">Actual financial performance is continuously monitored against forecasted projections to gauge 
          accuracy and relevance. Forecasts are adapted as needed based on emerging data or shifts in market dynamics to optimize strategic decision-making. 
          Regular adjustments ensure forecasts remain up-to-date and aligned with the businesss evolving landscape..</p>
      </div>
    </div>
  </div>
</div>


<section className="mx-auto py-4">
  <div className="mx-auto flex w-full flex-col items-center justify-center sm:max-w-screen-sm md:max-w-screen-md lg:flex-row">
    <div className="text-center">
        <h2 className="bg-clip-text text-3xl font-extrabold text-gray-700 sm:text-5xl">Get in touch</h2>
        <p className="bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-6xl">Lets take your 
          business to the moon</p>
        
        <Link href={"/contact"}>
        <p className="shadow-pink-600/30 mt-10 inline-flex h-12 items-center rounded-full bg-pink-500 px-6 py-3 text-xl
         font-light text-white shadow-md transition hover:translate-y-1 hover:scale-105 hover:bg-pink-600 hover:shadow-lg">Contact Us</p>
        </Link>
        
    </div>
  </div>
</section>


{/* 
<div className="mx-auto my-10 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
  <div className="mb-10 flex flex-col border-t-4 border-blue-600 pt-4 md:flex-row">
    <h2 className="mr-auto mb-4 text-4xl font-medium lg:text-3xl">Experience of <span className="whitespace-nowrap text-blue-600 md:text-gray-600">2 Decades</span></h2>
    <a href="#" className="text-lg font-medium underline hover:text-blue-600">Read our Story</a>
  </div>
  <div className="flex flex-col md:flex-row">
    <div>
      <p className="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis omnis sint debitis sequi animi quaerat repellendus id distinctio dolores minus.</p>
      <p className="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus eos quod hic perspiciatis, consectetur suscipit maxime mollitia minima. Enim consequatur ab praesentium ipsum neque dolore expedita, earum rerum reiciendis nihil, deleniti id atque consequuntur necessitatibus distinctio aliquid explicabo quo obcaecati?</p>
    </div>
    <p className="hidden uppercase md:block md:text-7xl">
      Since <br />
      <span className="whitespace-nowrap text-blue-600">20 Years</span>
    </p>
  </div>
</div> */}


  </div>
</section>

    </div>
  )
}

export default page
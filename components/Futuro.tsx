import Link from 'next/link'
import React from 'react'

function Futuro() {
  return (
    <div className=''>
      

<section className="mx-auto max-w-screen-xl py-12  sm:py-16 lg:py-4">
  <div className="mx-auto px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center ">
      <p className="text-sm font-medium ">INTRODUCING</p>
      <h2 className="mt-2 text-3xl font-bold text-blue-500 sm:text-4xl xl:text-5xl">Our Finance as a Service Solution</h2>
      <hr className="mx-auto mt-4 h-2 w-32 border-none bg-blue-700" />
    </div>

    <div className="grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-sm md:mt-20 md:max-w-full md:grid-cols-2 md:text-left">
      <div className="">
      
      <div className="p-8 bg-white shadow-md rounded-lg">
  <h3 className="text-4xl font-bold text-blue-500">Outsourced Bookkeeping Services</h3>
  <p className="mt-6 text-base text-gray-500">
    <span className="block mb-2"><strong>

Optimize your businesss financial management with our outsourced bookkeeping services. We handle all aspects of your financial transactions, from recording and categorizing expenses to generating comprehensive financial reports. Our expert team ensures accuracy, compliance, and efficiency, allowing you to focus on growing your business while we manage your books with precision and care.
.</strong></span>
    {/* <span className="block mb-2"><strong>Income Tracking:</strong> Accurately record and categorize business income for precise financial management.</span>
    <span className="block mb-2"><strong>Invoices and Receipts:</strong> Seamlessly create, manage, and upload or scan invoices and receipts.</span>
    <span className="block"><strong>Financial Reports:</strong> Generate comprehensive financial reports, including profit and loss, balance sheet, and cash flow statements.</span> */}
  </p>
  <Link href={"/services"}>
  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition transform hover:-translate-y-1">
    Learn More
  </button>
  
  </Link>
  
</div>



      </div>
      <div className="p-8 bg-white shadow-md rounded-lg">
  <h3 className="text-4xl font-bold text-blue-500">Financial Forecasting</h3>
  <p className="mt-6 text-base text-gray-500">
    <span className="block mb-2"><strong>



Harness the power of our specialized financial forecasting services to gain deep insights into your businesss financial future. Leveraging comprehensive analysis of historical data and current market trends, we provide detailed projections and strategic recommendations tailored to your unique business needs. Our expert forecasting helps you navigate uncertainties, optimize resource allocation, and seize opportunities for sustainable growth and profitability.
</strong></span>
    {/* <span className="block mb-2"><strong>Tax Calculation and Compliance:</strong> Accurately calculate taxes and generate fully compliant tax reports.</span>
    <span className="block mb-2"><strong>Notifications and Reminders:</strong> Stay informed with timely notifications and reminders for important deadlines and tasks.</span>
    <span className="block"><strong>Audit Trails:</strong> Maintain a comprehensive history of financial records with detailed change tracking.</span> */}
  </p>
  <Link href={"/forecast"}>
  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition transform hover:-translate-y-1">
    Learn More
  </button>
  
  </Link>
</div>
<div className="p-8 bg-white shadow-md rounded-lg">
  <h3 className="text-4xl font-bold text-blue-500">Integration Needs</h3>
  <p className="mt-6 text-base text-gray-500">
    <span className="block mb-2"><strong>Accounting Software:</strong> Seamlessly integrate with popular accounting software like QuickBooks and Xero for streamlined financial management.</span>
    <span className="block mb-2"><strong>Payment Gateways:</strong> Facilitate online payments with integrations to trusted payment gateways such as Stripe and PayPal.</span>
    <span className="block mb-2"><strong>CRM Systems:</strong> Connect effortlessly with leading CRM systems like Salesforce to ensure comprehensive customer relationship management.</span>
    <span className="block"><strong>Bank Integration:</strong> Securely connect to major banks for accurate and efficient bank reconciliation.</span>
  </p>
  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition transform hover:-translate-y-1">
    Learn More
  </button>
</div>
{/* <div className="p-8 bg-white shadow-md rounded-lg">
  <h3 className="text-4xl font-bold text-gray-800">What Our App Can Do</h3>
  <p className="mt-6 text-base text-gray-500">
    <span className="block mb-2"><strong>Compliance and Security:</strong> Adhere to relevant financial regulations (e.g., GDPR, PCI-DSS) with robust security measures.</span>
    <span className="block mb-2"><strong>Testing and Quality Assurance:</strong> Ensure top-notch quality through comprehensive testing, including user acceptance testing (UAT) and stringent security assessments.</span>
    <span className="block"><strong>Maintenance and Support:</strong> Provide continuous maintenance and support post-launch for optimal performance and user satisfaction.</span>
  </p>
  <button className="mt-4 rounded-lg bg-blue-700 px-6 py-2 text-white transition transform hover:-translate-y-1">
    Learn More
  </button>
</div> */}
    </div>
  </div>
</section>

    </div>
  )
}

export default Futuro
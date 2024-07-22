import React, { ChangeEvent, FormEvent, useState } from 'react'

interface Inputs {
    name:string;
    email:string;
    subject:string;
    message:string;
};

function Form() {
    const [newCategory, setNewCategory] = useState<Inputs>({name: '', email: '', subject: '', message: ''});

   const handleCategory = async (e: FormEvent) => {
    e.preventDefault();
    try {
      window.location.href= `mailto:procountskenya@gmail.com?subject=${newCategory.subject}&body=Hello,my name is ${newCategory.name}. ${newCategory.message} (${newCategory.email})`
    
   
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
    
  return (
    <div className="mx-auto mb-20 flex w-full max-w-screen-lg flex-col overflow-hidden 
    rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
    <form className="mx-auto w-full max-w-xl border-gray-800 px-10 py-8 md:px-8" 
     onSubmit={handleCategory}>
      <div className="mb-4"><label className="text mb-2 block font-medium" >Your name:</label>
      <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 
      focus:ring"
        id="name" type="text"   name="name" value={newCategory.name}
        onChange={handleCategoryChange}  /></div>
      <div className="mb-4"><label className="text mb-2 block font-medium " >Your e-mail:</label>
      <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 
      focus:ring"
        id="email" type="email" name="email"   value={newCategory.email}
        onChange={handleCategoryChange}  /></div>
      <div className="mb-4"><label className="text mb-2 block font-medium " >Subject:</label>
      <input className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 
      focus:ring"
        id="subject" type="text"  name="subject"   value={newCategory.subject}
        onChange={handleCategoryChange} /></div>
      <div className="mb-4"><label className="text mb-2 block font-medium ">Message:</label>
      <textarea className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500
       focus:ring"
        id="message" name='message' value={newCategory.message}
        onChange={handleCategoryChange} ></textarea></div>
      <div className="flex items-center">
        <div className="flex-1"></div>
        <button className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
          type="submit">Send message</button>
      </div>
    </form>
    <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
      <div className="">
        <p className="mb-4 font-medium border-b  pb-2">OFFICE HOURS</p>
        <p className="mb-4">Monday – Saturday: 08:00 – 16:00</p>
        <p className="mb-4">Sunday: Closed</p>
        <p className="mb-4">
          Email:
          <a href="#" className="font-semibold underline">procountskenya@gmail.com</a>
        </p>
        <p className="mb-4">
          Phone:
          <a href="#" className="font-semibold underline"> +254742476930</a>
        </p>
        <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
      
      </div>
    </div>
  </div>
  )
}

export default Form
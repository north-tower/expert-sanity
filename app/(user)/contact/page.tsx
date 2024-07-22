'use client'

import Form from '@/components/Form';
import MainMap from '@/components/MainMap';

import React, { ChangeEvent, FormEvent, useState } from 'react'


interface Inputs {
    name:string;
    email:string;
    subject:string;
    message:string;
};

type Props ={}
function page({}: Props) {
   

   
    
  return (
    <>
    <MainMap />
    <div className="m-5">
        <div className="font-sans text-base  sm:px-10 ">
            <div className="text-base ">
                <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <div className="mx-2 pt-12 text-center md:mx-auto md:w-2/3 md:pb-12">
                    <h1 className="mb-4 text-3xl font-black sm:text-5xl xl:text-6xl">Contact us</h1>
                    <div className="text-lg sm:text-xl xl:text-xl">
                    <div className="">
                        <p className="mb-4">Get A free quote.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
</div>
<Form />


    </div>
    
    </>
  )   
}

export default page
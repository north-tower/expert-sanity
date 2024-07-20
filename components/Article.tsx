import Link from 'next/link'
import React from 'react'

function Article({id,date, title, description, image}: {id: string, date: string, title: string, description: string, image: string}) {
  return (
    <div>
         <article className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
        <Link href={`/post/${id}`}  className="group relative block h-56 w-full shrink-0 self-start overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-24 md:w-24 lg:h-40 lg:w-40">
          <img src={image} />
        </Link>

        <div className="flex flex-col gap-2">
          <span className="text-sm text-gray-400">{date}</span>

          <h2 className="text-xl font-bold text-gray-800">
          <Link href={`/post/${id}`}>

            <p className="transition duration-100 hover:text-blue-800 text-blue-500 active:text-rose-600">{title}</p>
          </Link>
          </h2>

          <p className="text-gray-500">{description}</p>

          <div>
            <Link href={`/post/${id}`}>
            <p className="font-semibold transition duration-100 hover:text-blue-800 text-blue-500
             active:text-rose-700">Read more</p>
            
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Article
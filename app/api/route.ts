import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name: string
}

export async function GET() 
     {
        let res = {
            child: [

                { "name" : "DDF"}
            ]
        }
   return Response.json(res)
}
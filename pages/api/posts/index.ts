// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type Post = {
  userId:number,
  title:string,
  id:number,
  body:string
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post[]>
) {
  if(req.method == "GET"){
    res.status(200).json(data)
    return
  }
}

const createTestData = ():Post[] => {
  const response : Post[]= []
  for (var i = 1; i <= 100 ; i++){
    response.push({
      id: i,
      userId:Math.floor(Math.random() * 100) ?? 1,
      body: "test",
      title: `title${i}`
    })
  }
  return response
}

export const data = createTestData()

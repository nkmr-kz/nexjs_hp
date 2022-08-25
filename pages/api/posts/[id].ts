// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { data, Post } from '.'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Post|undefined>
) {
  if(req.method == "GET"){
    const {id} = req.query
    const post = data.find(d => d.id == Number(id))
    if (post == null) {
        res.status(404).json(undefined)
        return
    }
    res.status(200).json(post)
    return
  }
}


import type { NextApiResponse, NextApiRequest } from "next";
import { insertNewBlog } from "../../../lib/database";

export default async function handler(req:NextApiRequest, res:NextApiResponse)  {
    if (req.method != "POST") {
        res.status(400).send({message: "only POST requests allowed!"});
        return;
    } 
    const body = req.body;
    insertNewBlog(body['title'], body['content']);
}

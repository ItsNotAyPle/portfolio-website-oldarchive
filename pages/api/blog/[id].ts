import { getSpecificBlog } from "../../../lib/database";
import type { NextApiResponse, NextApiRequest } from "next";

export default (req:NextApiRequest, res:NextApiResponse) => {
    const id = req.query['id'];
    getSpecificBlog(id, (result) => {
        console.log(`result:\n ${result}\n`)
        res.json(result);
    });
}

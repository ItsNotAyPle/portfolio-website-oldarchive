import { getAllBlogs } from "../../../lib/database";
import type { NextApiResponse, NextApiRequest } from "next";

export default async (req:NextApiRequest, res:NextApiResponse) => {
    getAllBlogs((blogs:any) => {
        res.json(blogs);
    });
}

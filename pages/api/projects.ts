import type { NextApiResponse, NextApiRequest } from "next";
import {getAllProjects} from "../../lib/database";

export default function handler(req:NextApiRequest, res:NextApiResponse) {
    if (req.method != "GET") res.status(500).send({message: "only GET requests allowed!"});
    getAllProjects(projects => {
        res.json(projects);
    });
}

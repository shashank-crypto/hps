import data from './data.json';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        data[req.body.email] = req.body.info;
        console.log(req.body);
        res.status(200).json(req.body);
    }}
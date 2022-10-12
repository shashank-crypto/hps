import dataFile from './data.json';
import fs from 'fs';

export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
        dataFile[req.body.email] = req.body.info;
        saveData(dataFile);
        return res.status(200).json(req.body);
    }
    if (req.method === 'GET') {
        if (dataFile[req.body.email] && dataFile[req.body.email].password === req.body.password) {
            return res.status(200).json({auth : true, info : {email : req.body.email, name : dataFile[req.body.email].name}});
        }
        else {
            return res.status(200).json({auth : false});
        }
    }
}

function saveData(data) {
    fs.writeFileSync('pages/api/data.json', JSON.stringify(data));
}
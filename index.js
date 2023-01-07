import dotenv from 'dotenv';
dotenv.config();

import fetch from 'node-fetch';

const route = process.env.ROUTE;

async function get() {
    const data = await fetch(`https://and249-api.cyclic.app/api/${route}`);
    console.log(await data.json());
}

get();

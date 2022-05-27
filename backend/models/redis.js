import { createClient } from 'redis';

const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();


await client.HSET('usuario', 'datos', '[1,2,3]');
await client.HSET('usuario', 'datos', '[1,2,4]');
var d=await client.HGETALL('usuario');
console.log(JSON.stringify(d));

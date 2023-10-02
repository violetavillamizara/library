import env from"../config.js";

const uri=`${env.ssl+env.hostName}:${env.port}`;
const config={method:undefined,headers:{"Content-Type":"application/json"}};
console.log(uri);


export const getAll= async()=>{
    config.method="GET";
    let res= await(await fetch(`${uri}/libro`, config)).json();
}

export const post= async(obj)=>{
    config.method="POST";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/libro`, config)).json();
    return res;
}

deleteone
if(typeof id!=='number')return{status:400, message:"no"};
deletemany
import env from"../config.js";

const uri=`${env.ssl+env.hostName}:${env.port}`;
const config={method:undefined,headers:{"Content-Type":"application/json"}};


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

export const deleteOne = async(id)=>{
    if(typeof id!=='number')return {status:400, message:"`El dato '${id}' no cumple`"};
    config.method="DELETE";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/libro/${id}`, config)).json();
    return res;

}

export const putOne= async(obj)=>{
    const {id}=obj;
    if(Object.constructor.name !=='Object')return {status:400, message:"`El dato '${id}' no cumple`"};
}

deletemany
putOne
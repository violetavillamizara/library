import env from "../config.js";

const uri=`${env.ssl+env.hostName}:${env.port}`;
const config={method:undefined,headers:{"Content-Type":"application/json"}};

const validarEstructura=(data={})=>{
    if(data.constructor.name !== "Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {nombre=null} = data;
    if(typeof nombre !=='string')return {status:401,message:`El nombre '${nombre}' no cumple con el formato`};
    return res;
}

export const getAll= async()=>{
    config.method="GET";
    let res= await(await fetch(`${uri}/categoria`, config)).json();
}
export const getOne = async(id)=>{
    config.method = "GET";
    let res = await (await fetch(`${uri}/categoria/${id}`, config)).json();
    return res;
}
export const post= async(obj)=>{
    obj = validarEstructura(obj);
    if(obj.status) return obj;
    
    config.method="POST";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/categoria`, config)).json();
    return res;
}

export const deleteOne = async(id)=>{
    if(typeof id!=='number')return {status:400, message:"`El dato '${id}' no cumple`"};
    config.method="DELETE";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/categoria/${id}`, config)).json();
    return res;

}
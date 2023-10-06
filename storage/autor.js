import env from "../config.js";

const uri=`${env.ssl+env.hostName}:${env.port}`;
const config={method:undefined,headers:{"Content-Type":"application/json"}};


const validarEstructura=(data={})=>{
    if(data.constructor.name !=="Object" || Object.keys(data).length==0) return {status: 400, message: `Usuario envie los datos`};
    const {
        nombre=null, 
        apellido=null, 
        nacionalidad=null, 
    } = data;

    if(typeof nombre !== 'string') return {status: 400, message: `El nombre '${nombre}' no cumple con el formato`};
    if(typeof apellido !== 'string') return {status: 400, message: `El apellido '${apellido}' no cumple con el formato`};
    if(typeof nacionalidad !== 'string') return {status: 400, message: `La nacionalidad '${nacionalidad}' no cumple con el formato`};
    return data;
}

export const getAll= async()=>{
    config.method="GET";
    let res= await(await fetch(`${uri}/autor`, config)).json();
}

export const getOne = async(id)=>{
    config.method = "GET";
    let res = await (await fetch(`${uri}/autor/${id}`, config)).json();
    return res;
}

export const post= async(obj)=>{
    obj = validarEstructura(obj);
    if(obj.status) return obj;
    
    config.method="POST";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/autor`, config)).json();
    return res;
}

export const deleteOne = async(id)=>{
    if(typeof id!=='number')return {status:400, message:"`El dato '${id}' no cumple`"};
    config.method="DELETE";
    config.body=JSON.stringify(obj);
    let res= await(await fetch(`${uri}/autor/${id}`, config)).json();
    return res;

}


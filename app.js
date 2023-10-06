const url=""


const enviar=async()=>{
    let config=
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            "titulo":"hola",
            "autor":"yo"
        })
    }
    let res= await (await fetch(url,config)).json();
    console.log(res)
}
//enviar();

const act=async()=>{
    
    let id = 1
    let config=
    {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            "titulo":"llll",
            "autor":"lololol",
            "id":1
        })
    }
    let res= await (await fetch(`${url}/${id}`,config)).json();
    console.log(res)
}
act();
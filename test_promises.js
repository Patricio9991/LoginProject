

function function_with_promise(a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (a>b){
                    resolve(true)
                }
            else{
                    reject(`${a} no es mayor a ${b}`)
                }},10000)
    })
}

async function wait_for_action() {
    try {
        const testing_tiempo = await function_with_promise(10, 4);
        return testing_tiempo;
    } catch (error) { 
        return error;
    }
}



function_with_promise(10,12).then((result)=>{console.log(result)}).catch(err=>console.log(err))


console.log(3+4+5)
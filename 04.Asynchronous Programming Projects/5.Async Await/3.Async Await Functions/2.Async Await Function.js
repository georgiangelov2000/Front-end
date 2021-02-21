function afterOneSecond(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done')
        },1000)
    })
}

async function resultCall(){
    console.log("Ready ?")
    const result=await afterOneSecond();
    console.log(result)
}
resultCall()
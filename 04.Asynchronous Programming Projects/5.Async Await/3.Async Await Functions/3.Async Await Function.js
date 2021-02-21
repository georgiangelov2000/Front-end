function myFunction(){

    return new Promise(success=>{
        setTimeout(()=>{
            success('resolved')
        },2000);
    });

};

async function call(){
    console.log('calling')
    let result=await myFunction();
    console.log(result)
}
call()
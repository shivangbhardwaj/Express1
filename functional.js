module.exports=(value1,value2,callback)=>
{
    if(value1<0&&value2<=0)
    {
        setTimeout(()=>{
            callback(new Error("error has occured"),null)
        },2000)
    }
    else
    {
        setTimeout(()=>{
            callback(null,{
                sum : (value1,value2)=> (value1+value2),
                subtract : (value1,value2)=> (value1-value2),
                multiply : (value1,value2)=> (value1*value2),
                divide : (value1,value2)=> (value1/value2),
            })
        },2000)

    }
}
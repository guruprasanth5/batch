const Batch = require('./index')

let data = ['123','456','789','147','258','369','159','357','156','354']
const Chunk_size = 4
let batch = new Batch(data,Chunk_size)
batch.execute(fetch)
.then((result)=>{
    //if all executes successfully this gets executed
    console.log(result)
},err=>{
    //error occur
})

function fetch(uid){
    //fetch user based on uid and return data
    return uid
}
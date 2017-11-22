# Batch
Batch is a minimalistic batching mechanism for performing a job on large array by breaking it into small chunks.

### Working
It takes an array and a chunk size as a input, then breaks them into smaller chunks based on chunk size and execute the chunks.

### Example
Consider an array of user id for which you need to fetch data from DB.
```
let data = ['123','456','789','147','258','369','159','357','156','354']
```
so now if we need to batch these data we first need to make an instance of Batch as follows
```
const Chunk_size = 4
let batch = new Batch(data,Chunk_size)
batch.execute(fetch)
.then((result)=>{
    //if all executes successfully this gets executed
},err=>{
    //error occur
})

function fetch(uid){
    //fetch user based on uid and return data
}
```  
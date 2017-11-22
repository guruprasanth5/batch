const P = require('bluebird')

class Batch {
    constructor(data = [], chunkSize = 1) {
        this.data = data
        this.chunkSize = chunkSize
    }

    setData() {
        this.data = data
    }

    getData() {
        return this.data
    }

    setChunkSize(chunkSize = 1) {
        this.chunkSize = chunkSize
    }

    getChunkSize() {
        return this.chunkSize
    }

    execute(fn) {
        let batchedData = this.batching()
        return P.mapSeries(batchedData,(item,index,length)=>{
            return P.map(item,fn)
        })
        .then(result=>{
            return [].concat.apply([],result)
        })
    }

    batching() {
        let iterations = Math.ceil(this.data.length / this.chunkSize)
        let batch = []
        for (let i = 0; i < iterations; i++){
            let start = this.chunkSize*i
            let end = start + this.chunkSize
            batch.push(this.data.slice(start,end))
        }

        return batch
    }
}

module.exports = Batch
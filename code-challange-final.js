let log = ['abc=1', 'b=3', 'ab=12333']

let logMethods = {
    log_input: (tag, count) => {
    
        let logTag = tag + '=' + count;
        log.push(logTag) 

    },
    log_unique: () => {
    
        let uniqueLogs = [];
        for(let i of log){
            if (i === log[i]) { 
                uniqueLogs.push(i)
                return uniqueLogs
            } else {
                return uniqueLogs[uniqueLogs.length - 1]
            }
        }  
    
    },
    log_sorted: (reverse) => {
    
        let emptyArr = []
            for (let i in log){            
                let logTag = i.split('=')[0]
                if(logTag === log[i].split('=')[0]){
                    emptyArr.push(logTag)
                }    
            }
            reverse ?
            emptyArr.reverse()
            :
            emptyArr.sort()       
    
    },
    log_sum: () => {
    
    let total = [];
    let uniqueLogs = [];
        for(let i of log){
            if (i === log[i]) { 
                uniqueLogs.push(i)
            }
        }  
        for(let j in uniqueLogs){
            let count = uniqueLogs[j].split('=')
            total.push(count[count.length - 1])            
        }
        return total.reduce()
    }
}
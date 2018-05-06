let log = ['abc=1', 'b=3', 'ab=12333']
//log array with small amount of sample data

let logMethods = {
    log_input: (tag, count) => {
    
    //INSTRUCTIONS:
    // Where "tag" is a string, and "count" is an integer.  This function will be called once per log entry line to prepare the data for output. 

    //MY UNDERSTANDING:
    //Method will:
    //a. take in tag and count
    //b. put them into the log's specified format
    //c. push correct version into the log array

        let logTag = tag + '=' + count;
        log.push(logTag) //recheck scope to see if this is possible

    },
    log_unique: () => {
    
    
    //INSTRUCTIONS:
    // log_unique() - return a collection of tags and their associated integers with all the duplicates removed.  In the case of duplication during input the last value should be stored.

    //MY UNDERSTANDING:
    //Method will:
    //a. scan the log array for duplicates
    //b. return a filtered version of the log array with out duplication
    
    //Questions?
    //How do I accomplish the last piece ('incase of duplication during input')   

    //CODE CONSTRUCTS:
    //-for loop to access every element in the log array
    //-check to see if tag is equal to each element in array
    //if so, push entire element to an array
    //return array -OR- last value (arr.length - 1)
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
    //INSTRUCTIONS:
    // return a sorted collection of unique tag names. tags should be ascending in order, unless the "reverse" parameter is true, then they should be descending.

    //OBSERVATION:
    //'reverse' parameter should be a boolean/refers to the boolean value of what is passed in

    //MY UNDERSTANDING:
    //Method will:
    //a. return sorted array of unique tag names, with ascending or descending depending on value of 'reverse' parameter
    
    //CODE CONSTRUCTS:
    //-must isolate the tag portion of each element in log array
    //-for loop needed to check to see if the tag is unique
    //-must unique tags must be added to an array
    //-.sort() needed *must research how to use.sort() in descending order*
    //return either the ascending or descending array (possible ternary operator usage?)
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
    //INSTRUCTIONS:
    //sum all of the counts in the collection after duplicates have been removed.

    //MY UNDERSTANDING:
    //Method will:
    //a. return a sum of all the numbers that appear after the '=' of each element in log array

    //CODE CONSTRUCTS:
    //for loop needed to perform operation on each element of log array
    //-must isolate integer portion of each log string
    //-push each value into an array (existing outside the for loop)
    //-.reduce() all of the values into one
    //return this number
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

//Process
//1. Research 'method structure' - re-solidify understanding of what this means, and how it should be applied in this situation.
//2.Pseudo-code
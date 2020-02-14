let taskArr = [9,8,7,6,5,4,3,2,1]

function randSort (arr) {
    let length = arr.length
    for (let i = 0; i < length-1; i++) {

        for (let j = 0; j < length-1; j++) {
            let randomForArr = -3 + Math.trunc(Math.random() * (3 + 3))
            if (arr[j+1] + randomForArr < arr[j]){
                let t = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = t
            }
        }
     }                     
    return arr; 
}
console.log(randSort(taskArr))
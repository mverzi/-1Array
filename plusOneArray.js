/**
 * This function takes an array of integers and returns an array that has 1 added to the value represented by the array.
 * @param {*} arr The array to be incremented
 * @returns The value represented by the array, incremented by 1
 */
function upArray(arr){
    if(arr.length == 0) return null
    for(num in arr){
      if(arr[num] < 0 || arr[num] > 9){
        return null
      }
    }
    arr = arr.reverse()
    for(num in arr){
      if(arr[num] == 9){
          arr[num] = 0
        if(arr[num] == arr[arr.length-1]){
           arr.push(1)
           }
      } else {
          arr[num] += 1
          break
      }
    }
    return arr.reverse()
}
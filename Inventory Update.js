function updateInventory(arr1, arr2) {
   let flag = false; 
    for(let i =0;i<arr2.length;i++){
for(let j =0;j<arr1.length;j++){
    flag = false;
if(arr2[i][1]==arr1[j][1]){
    arr1[j][0] += arr2[i][0];
    flag = true;
    break;
}

    }
    if(!flag)arr1.push(arr2[i]);
    }
    return arr1.sort((a,b) => {
        if(a[1] < b[1]) { return -1; }
    if(a[1] > b[1]) { return 1; }
    return 0;
       })
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

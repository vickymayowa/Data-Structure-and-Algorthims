var WelcomeText = "Welcome to Data Structures and Algorithms. Coding Exam"
console.log(WelcomeText)
// Section B
        // Question 4 
function package(x, y) {
    let count = 1;
    while (count <= x) {
      let cartoon = 1;
      while (cartoon <= y) {
        console.log(`Cartoon ${cartoon} - noodle ${count}`);
        count++;
        if (count > x) {
          break;
        }
        cartoon++;
      }
      count++;
    }
    console.log(`Cartoon ${y} - noodle ${x}`);
  }
  
  // Example usage:
  package(3, 2);

   // Question 1
   function PDCNID() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} NID-PDC`);
      } else if (i % 3 === 0) {
        console.log(`${i} PDC`);
      } else if (i % 5 === 0) {
        console.log(`${i} NID`);
      }else if (i % 3!== 0 && i % 5!== 0) {
        console.log(`${i} Neither PDC nor NID`);
      }else {
        console.log(i);
      }
    }
  }
PDCNID()

     // Question 7
     function findMinMaxAvgSum(arr) {
        let minNum = arr[0];
        let maxNum = arr[0];
        let sumNum = 0;
        for (let i = 0; i < arr.length; i++) {
          if (arr[i] < minNum) {
            minNum = arr[i];
          }
          if (arr[i] > maxNum) {
            maxNum = arr[i];
          }
          sumNum += arr[i];
        }
        let avgNum = sumNum / arr.length;
        return [minNum, maxNum, avgNum, sumNum];
      }

      let arr = [5, 8, 7, 3, 2, 9, 5];
      let [minNum, maxNum, avgNum, sumNum] = findMinMaxAvgSum(arr);
      console.log("Minimum number:", minNum);
      console.log("Maximum number:", maxNum);
      console.log("Average number:", avgNum);
      console.log("Sum of numbers:", sumNum);


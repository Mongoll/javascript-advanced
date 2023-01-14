/* 
1. Fix the bugs in the codes below, to make the console print out different numbers
from 0 to 100
 */

const printNum = () => {
    for (let i = 0; i <= 100; i++) {
        setTimeout(() => console.log(i), 1000)
    }
}

printNum()

/* 
2. Given the array below:
myArr = ['12-24-2014', '09-23-2022', '12-30-2021', '07-15-2018']
the array above has serveral dates, written in order month-day-year
Write the code inside function fixDate(array) below to transform the array to new 
format dates day-month-year
expected result: ['24-12-2014', '23-09-2022', '30-12-2021', '15-07-2018', '14-12-2019', '14-12-2022']
 */

let myArr = ['12-24-2014', '09-23-2022', '12-30-2021', '07-15-2018', '2019-12-14', '2022-14-12']
const fixDate = (array) => {
    let tempDateArr = []
    array.map((element) => {
        let separatedData = element.split('-');
            if (separatedData[0].length > 2){
                separatedData.reverse(); 
            }
            if (separatedData[1] > 12){
                [separatedData[0], separatedData[1]] = [separatedData[1], separatedData[0]]
            }
        tempDateArr.push(separatedData.join('-'))
        }) 
    return tempDateArr
}
let newArr = fixDate(myArr)
console.log(newArr)

/* 3. Counter function
Write a counter funtion to print out in console the time difference between 2 given date 
Expected result in the console: 11 days - 13 hours - 38 minutes - 20 seconds*/
const dateFrom = new Date(500000)
const dateTo = new Date(1000000000)

function countDays (diff) {
    const days = Math.floor(diff / 86400000);
    const diffDays = diff % 86400000;
    const hours = Math.floor(diffDays / 3600000);
    const diffHours = diff % 3600000;
    const minutes = Math.floor(diffHours / 60000);
    const diffMinutes = diff % 60000;
    const sec = Math.floor(diffMinutes / 1000);
    return days + " days - " + hours + " hours - " + minutes + " minutes - " + sec + " seconds";
  }

  console.log(countDays(dateTo-dateFrom)) 


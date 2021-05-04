// 1491. Average Salary Excluding the Minimum and Maximum Salary - Easy

var average = function(salary) {
    
    const numEmployees = salary.length;
    let max = salary[0];
    let min = salary[0];
    let average = 0;

    for(let i = 0; i < numEmployees; i++) {
            if(salary[i] > max) max = salary[i]
            if(salary[i] < min) min = salary[i]
            average += salary[i]
    }

    average = (average - max - min) / (numEmployees - 2);
    return average;
    
};

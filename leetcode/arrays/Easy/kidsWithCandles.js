//1431. Kids With the Greatest Number of Candies - Easy

const kidsWithCandies = function(candies, extraCandies) {

    let max = candies.reduce((val1,val2) => {
        return val1 > val2 ? val1 : val2;
    })
    
    return candies.map(element => {
        return (element + extraCandies) >= max;
    }); 
};

console.log(kidsWithCandies([2,3,5,1,3], 3)); //Answre: [true,true,true,false,true]
console.log(kidsWithCandies([4,2,1,1,2], 1)); //Answre: [true,false,false,false,false]
console.log(kidsWithCandies([12,1,12], 10)); //Answre:  [true,false,true]
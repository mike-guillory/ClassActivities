// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number

// 2) create a variable to represent the current total

// 3) write a while loop that sums the numbers from 1 to 100

let i = 1;
let total = 0;

while(i <= 100)
{
  total += i;
  i++;
}
console.log(total);


// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
let newTotal = 0;

for(i = 1; i <= 100; i++)
{
  newTotal += i;
}
console.log(newTotal);

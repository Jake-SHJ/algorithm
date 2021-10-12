// Average Salary Excluding the Minimum and Maximum Salary

// Given an array of unique integers salary where salary[i] is the salary of the employee i.
// Return the average salary of employees excluding the minimum and maximum salary.

// Example:
// Input: salary = [4000,3000,1000,2000]
// Output: 2500.00000
// Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
// Average salary excluding minimum and maximum salary is (2000+3000)/2= 2500

// 주어진 배열에서 가장 큰 값과 가장 작은 값을 제외한 평균을 반환하는 문제

/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  const sortedSalary = salary.sort((a, b) => a - b);
  sortedSalary.pop();
  sortedSalary.shift();
  const sum = sortedSalary.reduce((acc, cur) => acc + cur);
  return sum / sortedSalary.length;
};
// 일일이 잘라낸 방법, 속도 느림, 메모리 효율은 보통

var average = function (salary) {
  return (
    salary
      .sort((a, b) => a - b)
      .slice(1, salary.length - 1)
      .reduce((acc, cur) => acc + cur) /
    (salary.length - 2)
  );
};
// 한 줄로 해결한 방법, 속도 빠름, 메모리 효율 낮음

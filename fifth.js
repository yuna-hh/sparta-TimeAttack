// 정수를 저장한 배열, arr 에서 가장 큰 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예
//  arr       return
// [4,3,2,1]	[3,2,1]
// [10]	      [-1]

function solution(arr) {
  let remove = arr.reduce((arr, cur) => (arr > cur ? arr : cur));
  if (arr.length <= 1) {
    return [-1];
  } else {
    return arr.filter((el) => el !== remove);
  }
}

// -------------------------------- 이 아래는 건들지 마시오 -------------------------------------

// Test cases
function testRemoveLargest() {
  const testCases = [
    { input: [4, 3, 2, 1], expected: [3, 2, 1] },
    { input: [10], expected: [-1] },
    { input: [5, 7, 3, 9, 1], expected: [5, 7, 3, 1] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4] },
    { input: [2], expected: [-1] },
  ];

  let allPassed = true;

  testCases.forEach((testCase, index) => {
    const result = solution(testCase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testCase.expected);
    console.log(
      `Test Case ${index + 1}: ${
        passed ? "Passed" : "Failed"
      }. Expected: ${JSON.stringify(testCase.expected)}, Got: ${JSON.stringify(
        result
      )}`
    );
    if (!passed) {
      allPassed = false;
    }
  });

  if (allPassed) {
    console.log("All tests passed!");
  } else {
    console.log("Do it again.");
  }
}

// Run the tests
testRemoveLargest();

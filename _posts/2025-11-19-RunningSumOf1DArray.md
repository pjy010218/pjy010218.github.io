---
seotitle:  Leetcode "Running Sum of 1d Array" Question 
title: "[Leet: Easy] Running Sum of 1d Array"
description: Explanation and answer for "Running Sum of 1d Array" problem in Leetcode.
author: Junyoung Park
type: post
updated: 2025-11-19
sitemap:
  lastmod: 2025-11-19
url: /blog/Running-Sum-of-1d-Array/
tags:
  - LeetCode
---

## Running Sum of 1d Array

이 문제는 배열의 각 정수를 순차적으로 더하면서, 단계별 합을 새로운 배열에 저장하도록 하는 문제입니다.<br>
<br>

- Input: nums = [1,2,3,4]
- Output: [1,3,6,10]
- Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]. 
<br>
- Input: nums = [1,1,1,1,1]
- Output: [1,2,3,4,5]
- Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
<br>
<br>

이 문제는 함수의 반환 형태만 조심하면 그리 어려울 것은 없습니다. <br>
저의 접근법은,<br>
임시의 합 (a.k.a, tempSum) 변수에 단계별 합을 **먼저** 저장하고,<br>
tempSum 변수의 값을 반환할 배열에 저장하는 방식입니다.<br>
<br>
이때, 함수의 세 번째 인자로 들어오는 returnSize는 작성한 함수에서 반환하는 배열의 크기를 나타내는데,<br>
해당 배열의 크기는 인자로 받은 입력받은 Input의 nums 배열의 크기와 다르지 않기 때문에 <br>
함수의 종료 전 returnSize를 numsSize로 초기화하면 됩니다.<br>
<br>
또한, 반환해야 하는 변수 형태가 배열이고, 배열의 크기를 동적으로 할당해달라고 문제에서 요구하고 있기 때문에,<br>
sum을 malloc을 통해 동적 할당하고, 반환 시 이에 주의해 sum만 반환하면 됩니다.<br>

<br>
<hr/>

### C언어 작성 코드
```c
int* runningSum(int* nums, int numsSize, int* returnSize) {
    int *sum = malloc(sizeof(int) * numsSize);
    int tempSum = 0;
    for (int i = 0; i < numsSize; i++)
    {
        tempSum += nums[i];
        sum[i] = tempSum;
    }

    *returnSize = numsSize;
    return sum;
}
```

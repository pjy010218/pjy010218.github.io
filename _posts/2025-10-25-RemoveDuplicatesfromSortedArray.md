---
seotitle:  Leetcode "Remove Duplicates from Sorted Array" Question 
title: "[Leet: Easy] Remove Duplicates from Sorted Array"
description: Explanation and answer for "Remove Duplicates from Sorted Array" problem in Leetcode.
author: Junyeong Park
type: post
updated: 2025-10-19
sitemap:
  lastmod: 2025-10-19
url: /blog/Remove-Duplicates-from-Sorted-Array/
tags:
  - LeetCode
---

## Remove Duplicates from Sorted Array

이 문제는 오름차순 정렬 배열에서 중복되는 정수를 제거하는 문제입니다.<br>

- 입력 예시: nums = [1,1,2]
- 출력 예시: 2, nums = [1,2,_] 
<br>
- 입력 예시: nums = [0,0,1,1,1,2,2,3,3,4]
- 출력 예시: 5, nums = [0,1,2,3,4,_,_,_,_,_]
<br>
<br>

이 문제에서 주어진 함수는 int형 함수입니다. 반환값으로 정수값을 가진다는 의미이며,<br>
중복을 제거했을 때 몇 가지의 정수가 나오는지 반환하면 됩니다.<br>
즉, 중복을 제거한 후 배열이 [1,2,3,4]라면, 반환값은 4가 됩니다.<br>
<br>

이 문제를 해결하기 위한 저의 알고리즘은, <br>
> **이중반복문을 이용해 시작 지점의 정수와 불일치하는 정수를 찾을 때까지 순회한 후 불일치 시 시작 지점을 '점프'시키는 것**

이었습니다.<br>
<br>

이때, 가장 주의해야 하는 점은,<br>
**어느 시점에 정수를 저장할 것이냐** 입니다.<br>
<br>

정수를 저장할 수 있는 시점은 크게 두 가지였습니다.<br>
1. 불일치 발견 전 / 순회 시작 전 **저장한 후 순회**
2. **불일치 발견 후** 저장
<br>
<br>

저는 1번 시점에서 저장했습니다.<br>
알고리즘을 머릿속에서 상상할 때, 선제적으로 저장한 후 순회하는 것이 그림이 예뻐보였습니다. <br>
<br>

저의 핵심 알고리즘 작동 순서는 다음과 같습니다.<br>

1. 먼저 배열의 시작점에 순회 시작 지점 값을 저장합니다.
2. 불일치하는 정수가 나올 때까지 순회합니다.
3. 불일치하는 정수가 나오면 저장 지점을 가리키는 temp 값을 증가시키고,
4. 순회 시작 지점을 불일치 정수가 등장한 위치의 직전 위치로 변경합니다. *(이는 i++ 로 인해 다시 늘어날 i값을 정상화하기 위함입니다.)*
5. 마지막 지점까지 다다랐다면 마지막 원소를 저장하고 순회를 마무리합니다.
6. 저장 지점을 가리키는 temp 값은 결국 중복을 제거했을 때 남은 Unique한 정수의 개수이기 때문에 +1하여 반환합니다. *(temp 값은 인덱스였습니다. 배열은 0번째부터 시작하므로, **실제 개수**를 나타내기 위해 +1을 해주는 것입니다.)*

<br>
<hr/>

### C언어 작성 코드
```c
int removeDuplicates(int* nums, int numsSize) {
    int temp = 0;
    for (int i = 0; i < numsSize; i++)
    {
        for (int j = i + 1; j < numsSize; j++)
        {
            if (nums[i] != nums[j])
            {
                nums[temp] = nums[i];
                temp++;
                i = j - 1;
                break;
            }
            else
                continue;
        }
        if (i + 1 == numsSize)
            nums[temp] = nums[i];
    }

    return temp + 1;
}
```

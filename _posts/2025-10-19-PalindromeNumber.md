---
seotitle:  Leetcode "Palindrome Number" Question 
title: "[Leet: Easy] Palindrome Number"
description: Explanation and answer for "Palindrome Number" problem in Leetcode.
author: Junyoung Park
type: post
updated: 2025-10-19
sitemap:
  lastmod: 2025-10-19
url: /blog/Palindrome-Number/
tags:
  - LeetCode
---

## Palindrome Number

이 문제는 정수가 회문수인지 판별하는 문제입니다.<br>

- 입력 예시: 121
- 출력 예시: true  
<br>
- 입력 예시: -121
- 출력 예시: false  
<br>
- 입력 예시: 10
- 출력 예시: false

<br>

저는 입력된 정수를 문자열로 치환하고,<br>
반복문을 통해서 처음과 마지막 문자를 비교하는 식으로 해결했습니다.<br><br>

몇 가지 주의해야 하는 점들이 있습니다.<br>
1. **음수는 반드시 false** 입니다. *("-121"은 거꾸로 하면 "121-"이 되기 때문입니다.)*
2. **한 자리 수는 반드시 true** 입니다.
3. **첫 자리부터 중간까지만 순회**하면 됩니다. *("124421"이라면 앞쪽 반만 확인하면 되기 때문입니다.)*

<br>
<br>
<hr/>

### C언어 작성 코드
```c
bool isPalindrome(int x) {
    char str[100];
    bool flag = false;

    sprintf(str, "%d", x);
    if (x < 0)
        return false;
    else if (strlen(str) == 1)
        return true;
    else
    {
        for (int i = 0 ; i < strlen(str) / 2; i++)
        {
            if (str[i] != str[strlen(str) - i - 1])
            {
                flag = false;
                break;
            }
            else
                flag = true;
        }
        return flag;
    }

    return 0;
}
```
<hr/>
<br>

### 메모리 사용량 / 런타임 줄이기

이 문제는 런타임을 0ms에 가깝게 보내기 위한 고민을 하는 것이 좋습니다.<br>
제가 찾아본 방법은, **정수를 문자열로 변환하지 않고, 그대로 사용하는 것**입니다.<br><br>

정수 길이의 반을 기준으로 나눠서 뒷쪽 반을 나머지 ('%') 연산으로 뒤집고,<br>
앞쪽 반과 뒤집힌 뒷쪽 반을 비교하여 결과를 내는 것이 **메모리 사용량에서 더 우월**합니다.<br>
이렇게 되면 알고리즘 복잡도를 O(n)에서 O(log n)에서 줄일 수 있다고 합니다.<br>



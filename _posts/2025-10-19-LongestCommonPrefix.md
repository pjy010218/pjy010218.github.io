---
seotitle:  Leetcode "Longest Common Prefix" Question 
title: "[Leet: Easy] Longest Common Prefix"
description: Explanation and answer for "Longest Common Prefix" problem in Leetcode.
author: Junyoung Park
type: post
updated: 2025-10-19
sitemap:
  lastmod: 2025-10-19
url: /blog/Longest-Common-Prefix/
tags:
  - LeetCode
---

## Longest Common Prefix

이 문제는 정수가 회문수인지 판별하는 문제입니다.<br>

- 입력 예시: strs = ["flower","flow","flight"]
- 출력 예시: "fl"  
<br>
- 입력 예시: strs = ["dog","racecar","car"]
- 출력 예시: "" 
<br>
<br>

이 문제에서 strs는 **이중배열**로 돼있습니다.<br>
따라서 strs[i][j]의 **i, j**를 헷갈리지 않도록 잘 생각해야 합니다.<br><br>

저는 반복문을 통해서 **j를 두고 i를 증가해가며** 각 단어의 첫 번째 문자를 모두 비교하고,<br>
걸리면 바로 반복을 끝내고, strs의 끝까지 통과했다면 그때 반환할 배열에 추가하는 식으로 해결했습니다.<br><br>

또한, 반환할 배열은 함수 내에서 **동적 할당**으로 계속해서 크기를 늘려주는 방식으로 처리했습니다.<br>
하나의 큰 정적 배열을 만드는 것은 언제나 좋지 못한 코딩이라고 배웠습니다.<br><br>

<br>
<hr/>

### C언어 작성 코드
```c
char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) 
        return NULL;

    int i = 0;
    char* c = malloc(1);

    while (true) 
    {
        char current_char = strs[0][i];
        if (current_char == '\0')
            break;

        int j;
        for (j = 0; j < strsSize - 1; j++) 
        {
            if (strs[j][i] == '\0' || strs[j + 1][i] == '\0' || strs[j][i] != strs[j + 1][i]) 
                break;
        }

        if (j == strsSize - 1) 
        {
            char* temp = realloc(c, i + 2);
            c = temp;
            c[i] = current_char;
            i++;
        } 
        else
            break;
    }

    c[i] = '\0';
    return c;
    free(c);
}
```

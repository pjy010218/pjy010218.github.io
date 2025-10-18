---
seotitle:  Leetcode Roman To Integer Question 
title: "[Leet: Easy] Roman To Integer"
description: Example meta description
author: Mighil
type: post
updated: 2018-10-30T07:45:22+00:00 
sitemap:
  lastmod: 2018-10-30T07:45:22+00:00
url: /blog/example/
tags:
  - LeetCode
---


## Roman to Integer

이 문제는 로마 숫자를 정수로 변환해서 계산하는 문제입니다.<br>

> [!EXAMPLE]
> - 입력 예시: "III"
> - 출력 예시: "3"
>
> - 입력 예시: "LVIII"
> - 출력 예시: "58"
> 
> - 입력 예시: "MCMXCIV"
> - 출력 예시: "1994"

따라서, **간단한 switch ~ case 문**으로 해결할 수 있습니다.<br>
한 가지 **주의할 점**은,<br>
"IV", "CM"과 같은 예외사항이 존재한다는 것입니다.<br>
<br>
이 예외사항을 다루기 위해서는 한 가지 아이디어가 필요한데,<br>
저의 경우에는 아래와 같이 생각했습니다.<br>

> "한 글자 뒤를 미리 확인해서 예외사항이면 예외 처리하고 뒷문자까지 건너뛰자."

<br>
이제 작성해야 할 조건문이 몇 줄 늘어날 뿐, 큰 문제가 되진 않습니다.<br>
분명 보다 좋은 알고리즘이 있겠지만, 결과적으로 0ms으로 풀 수 있었습니다.<br>
<br>
<hr/>

### C언어 작성 코드
```c
int romanToInt(char* s) {
    int i = 0;
    int sum = 0;

    while(s[i] != '\0')
    {
        switch (s[i])
        {
            case 'I':
                if (s[i + 1] == 'V')
                {
                    sum += 4; 
                    i++;
                }
                else if (s[i + 1] == 'X')
                {
                    sum += 9; 
                    i++;
                }
                else
                    sum += 1;
                break;
            case 'V':
                sum += 5;
                break;
            case 'X':
                if (s[i + 1] == 'L')
                {
                    sum += 40; 
                    i++;
                }
                else if (s[i + 1] == 'C')
                {
                    sum += 90; 
                    i++;
                }
                else
                    sum += 10;
                break;
            case 'L':
                sum += 50;
                break;
            case 'C':
                if (s[i + 1] == 'D')
                {
                    sum += 400; 
                    i++;
                }
                else if (s[i + 1] == 'M')
                {
                    sum += 900;
                    i++;
                }
                else
                    sum += 100;
                break;
            case 'D':
                sum += 500;
                break;
            case 'M':
                sum += 1000;
                break;
            default:
                break;
        }
        i++;
    }
    return sum;
}
```



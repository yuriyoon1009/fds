# 1주차 컴퓨터공학 기초
marp: md into 
## day 1
* digital literacy
  1. ai의 발달로 다가오는 기본소득 시대에 대한 두 입장
    유토피아 / 디스토피아
    주커버그 / 호킹, 머스크
    -> 둘 중 어느것을 따를 것인지 판단하는 것 
  2. DL과 엔비디아의 성장의 관계를 이해하는 것 (병렬처리)
    mythbusters gpu vs cpu
---
### python programming
foundation knowledge quiz, 박종천
- 자료형
1. 정수 - CPU가 처리할 때 유리함(가장 빠름)
  1. 양수
  2. 음수
  3. 0
  저장방식의 차이
2. 실수 - GPU는 실수만 처리가능
  머신러닝 -> 가중치부여 -> 실수연산 필요
3. 문자, 문자열
  'a' == 문자(character)
  'aa' == 문자열(string)
  '''
  multi-
  line string
  '''
    c에서는 문자는 '' 문자열은 ""로 구분
4. boolean

- 자료'구조'
1. list: 파이썬에는 배열 대신 리스트가 있다.
  배열: '같은 자료형'을 가지는 변수들의 모임(JS는 다른 자료형도 가능하다)
  내장함수: `append, clear, copy, count, insert, pop, remove, reverse, sort`
2. tuple
3. dictionary

- 연산자
1. 산술연산: +, -, /, //, *, % ...

2. 논리연산: and, or, xor(비트연산?)
3. 대입(assign)연산: =

- 내장함수(built-in function)
`dir(a)` 로 가능한 메소드 리스트 확인
`help(a.count)` 로 해당 메소드의 사용법 확인
  - 자주 쓰는 것들 `count find split join replace`, `str.replace(' ', '')`

#### data type and structure

- indexing
- index number: 음수는 파이썬만 가능
- String은 변경이 불가능하다. (슬라이싱을 사용해야 함)
- String formatting (diff between 2.x and 3.x)
  % vs {}.format()
  
- If
```
if ... :
    ...
else:
    if ... :
    else:
    ...
```

- numguess
- for
 

- fizzbuzz

## day 2
### mutable / immutable
1. mutable: list, dictionary
2. immutable: string, tuple

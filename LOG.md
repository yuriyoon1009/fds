# week 1
> marp: md into slide
## day 1
* digital literacy
  1. ai의 발달로 다가오는 기본소득 시대에 대한 두 입장
    * 유토피아 / 디스토피아
    * 주커버그 / 호킹, 머스크
      * 둘 중 어느것을 따를 것인지 판단하는 것 
  1. DL과 엔비디아의 성장의 관계를 이해하는 것 (병렬처리) 
    mythbusters gpu vs cpu
> 파이썬을 통해 CS를 알아본다.

### python
foundation knowledge quiz, 박종천

#### 자료형
* 정수: CPU가 처리할 때 유리함(가장 빠름)
  1. 양수
  1. 음수
  1. 0
  저장방식의 차이
* 실수: GPU는 실수만 처리가능
  머신러닝 -> 가중치부여 -> 실수연산 필요
* 문자, 문자열
  'a' == 문자(character)
  'aa' == 문자열(string)
* boolean

#### 자료'구조'
1. list: 파이썬에는 배열 대신 리스트가 있다.
  내장함수: `append, clear, copy, count, insert, pop, remove, reverse, sort`
  > 배열: '같은 자료형'을 가지는 변수들의 모임(JS는 다른 자료형도 가능하다)
1. tuple
1. dictionary

#### 연산자(operator)
1. 산술연산: +, -, /, //, *, % ...
1. 논리연산: and, or, xor(비트연산?)
1. 대입(assign)연산: =, ...?

#### 내장함수(built-in function)
`<dir(a)>` 사용가능한 메소드 리스트 확인
`<help(a.count)>` 해당 메소드의 사용법 확인
- 자주 쓰는 것들 `count find split join replace`, `str.replace(' ', '')`

#### data type and structure

- indexing
- index number: 음수는 파이썬만 가능
- String은 변경이 불가능하다. (슬라이싱을 사용해야 함)
- String formatting (diff between 2.x and 3.x)
  % vs {}.format()
  
- If
`
if ... :
    ...
else:
    if ... :
    else:
    ...
`

- numguess
- for
 

- fizzbuzz

---
## day 2
### mutable / immutable
1. mutable: list, dictionary
2. immutable: string, tuple
- tuple은 성능이 좋지만 immutable / list는 mutable

### For
`
li = [1,2,3,4,5]
for __var__ in (__list__, __str___):
    ...
`
iterable 객체에만 사용할 수 있다.
iterable: list, tuple, string, dic, set
(a *= 2) == (a = a * 2)

### Fizz buzz
- list comprehention 으로 하려면?
    `[i for i in range()]`
---

### git
`
mkdir first-repo
cd first-repo
git init
ls -al
git status
touch index.txt    : untracked file
git status
git add index.txt  : on stage
git commit -m "add index.txt"
`

github.com에 접속해서 repo 생성 (name: first-repo)

`
git config --global user.name (username)
git config --global user.email (usermail)
git config --list
`

`
git remote add origin url
git push (remote) (branch)
`

edit index.txt    : modified(red)

`
git add index.txt : on stage (green)
git commit -m "edit index.txt(title)
> add new paragraph from `log.md`  : ``사용하면 누락됨~~
> description..."
git status        : nothing to commit(need to push)
git push orgin master
`

---

til 오늘자 log와 README.md를 각각 따로 commit 하기
log만 add 하고 commit~

### git 유의점
commit/push 할 때는 실행가능한 최소단위로 쪼개서 올린다.
"실행가능"이 매우 중요하다.
기능이 추가되면 테스트를 실시하고, 해당 decription을 추가해서 반영해야한다.

### TIL repo 만들기
git ingnore python why?

### markdown
html vs markdown
h1 ~ h6 / # ~ ######

### io 페이지 만들기
repo name: userid.github.io
use hexo (https://hexo.io documentation 확인)

### git/ branch
`
git branch -a
git branch -r
git branch (branchname)
git branch test
git checkout test
touch testbranch.txt

add, commit, push on test branch

git checkout master    : testbranch.txt 사라짐

git merge (branchname)
git push origin mater  : branch를 머지하고 마스터에 푸시

- git flow cheatsheet: (https://danielkummer.github.io/git-flow-cheatsheet/index.ko_KR.html)

### co-work using git
1. collaborator 지정
    collaborator로 지정하면 fork 없이 clone 가능하다.
2. fork & merge
    fork -> clone -> `remote add upstream (url)`
    -> new branch -> new file -> add, commit on branch -> push to orign(fork) branch -> compare & pull request head to base

---
## day 3

### to do
- [ ] dic.clear, dic.copy 알아보기
- [ ] asterisk 이해하기 `a, *b = list` ![mingrammer](https://mingrammer.com/understanding-the-asterisk-of-python)
- [ ] bool logical operator
- [ ] file I/O 이해/복습
- [ ] TIL 작성
- [ ] 이산수학? 대략적으로 무엇인지
- [ ] dictionary comprehention

### python
install openpyxl
```shell
(env3)$ pip install openpyxl
```

#### dictionary
* 명칭: 딕셔너리, 해시 테이블, 맵 (모두 같은 의미)
* 형태: {key : value, ...} -> pairs
* dic에는 순서가 없다. key로 접근한다.
  `dic['key-name']`
* change value
  `dic['key-name'] = new-value`
* remove dic
  `del dic['key-name']`
  > 강력한 `del object` 뭐든지 지워버린다
* view 객체
  `keys(), values(), items()` 로 만들어지는 객체
  * 동적이다. 한번 할당해두면 데이터 추가할 때 업데이트 됨.
* packing & unpacking

#### function
> `None` 객체
> 자료형이긴 한데, 아무것도 아니다(?)
* def & call
* func interface: 함수의 사용법 (ex. `help(...)` 결과 메세지)
  -> 결과값, =None 디폴트

  * scope
    * global & local variable
    * 함수 호출 스택 프레임
    * 스택 프레임 -> cpu 레지스터 스택포인터, 프레임 포인터
    * scoping 때문에 함수 속 함수를 만들지만, 실제로 이런경우가 발생하는건 좋지 않다. (과도한 depth 지양)

#### file I/O (txt)

> on day 4
> 메모리 -> cpu
> 하드디스크 -> cpu
> 하드디스크 -> 메모리 -> cpu
> reg, cache, memory, hard disk... hierachy

* I/O: cpu, mem, hard disc, monitor, gpu ... 사이에서 오고가는 모든 동작(stream)

```shell
#test
f = open('name.txt', 'wt')
```
> False in python
> '', [], (), {}, None

#### import your custom module

#### file I/O (binary)

* pickle:
  자료형을 유지하면서 데이터를 저장한다.

#### package 맛보기
* os:
  * 환경변수: `os.environ`

---

### Normal distribution

---

### OOP(객체) & POP(절차)

* procedure?
  : routine, subroutine, function(python!)

* why?
  : 코드 이해, 유지 보수 용이
  : 이 프로그램은 무엇을 하는가? 알기 쉬움

* hardware support
  : 하드웨어는 함수를 실행하기 위해 설계된 것이다. 그러므로 하드웨어를 알아야 한다.

#### 성적계산기 만들기

---

### wrapup
> help() 와 documentation의 기호체계를 잘 이해해두는 것이 필요하다.
> jupyter cell 실행을 신중하게... 숫자 안깨지도록
---
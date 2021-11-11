# TypeSctipt

### 타입스크립트를 사용하는 이유
타입을 지정함으로서 조금더 안정적인 프로그래밍과<br />
객체지향 프로그래밍이 가능하다

### 공식 사이트
TypeScript: https://www.typescriptlang.org
업데이트가 빈번하게 일어남<br />
사이트에서 버전마다 업데이트 내용 확인하는것이 좋음

### 설치
npm install -g typescript

### 버전확인
tsc -v

ex:)<br />
tsc main.ts 입력하면<br />
main.js 로 컴파일 및 파일생성

### 워치모드
tsc -w
or
tsc main.ts -w

### tsconfig.json 생성
tsc --init

### ts-node 설치 명령어
npm install -g ts-node

ex:)<br />
ts-node main.ts 명령어 실행하면<br />
컴파일 및 파일생성 안하고 터미널에서 바로 main.ts 실행가능
작동 안될시<br />
npm install @types/node --save-dev

### 정규표현식
https://regexr.com/5l6nr
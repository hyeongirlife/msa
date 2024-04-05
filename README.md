# MSA Practice

## Introduction
MSA 설계의 기본을 배우고 쿠버네티스를 활용한 컨테이너 관리를 학습하기 위한 레포지토리 입니다.

## Design
```
client - 클라이언트 서비스
comments - 댓글 서비스
event-bus - 서비스 간 통신 지원 서비스
moderation - 특정 댓글에 대한 수정 서비스
posts - 게시글  서비스
query - 쿼리 서비스
infra - 쿠버네티스 배포를 위한 yaml 파일이 존재
skaffold.yaml
```

## Stack
```
React
Express
Docker
Kubernetes
```

## Deploy Strategy
![image](https://github.com/hyeongirlife/msa/assets/68496535/43ce2945-76f6-403c-8385-3e9c30d1f4f5)

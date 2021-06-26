# JWT

Standard: https://jwt.io/introduction/

Java Implementation: https://mvnrepository.com/artifact/com.auth0/java-jwt

```json
Header {
"alg": "HS256",
"typ": "JWT"
}
```

```json
Payload {
"sub": userId,
"admin": false,
"iat": 9999999
}
```

Authentication: HTTP-Header:

```bash
Authorization: Bearer <token>
```

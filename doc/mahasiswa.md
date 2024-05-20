# MHS API Spec

## Create MHS

Endpoint : POST /api/mhs

Request Body :

```json
{
  "nim": 6666,
  "name": "rendi",
  "prodi": "S1 RPL",
  "semester": 1
}
```

Response Body (Success) :

```json
{
  "data": {
    "nim": 6666,
    "name": "rendi",
    "prodi": "S1 RPL",
    "semester": 1
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Name must not blank, ..."
}
```

## Data MHS

Endpoint : GET /api/mhs

Response Body (Success) :

```json
{
  "data": [
    {
      "nim": 6666,
      "name": "rendi",
      "prodi": "S1 Rekayasa Perangkat Lunak",
      "semester": 2
    },
    {
      "nim": 9999,
      "name": "hendra",
      "prodi": "S1 Sistem Informasi",
      "semester": 4
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "..."
}
```

## Update MHS

Endpoint : PATCH /api/mhs/nim

Request Body :

```json
{
  "nim": 6666,
  "name": "rendi",
  "prodi": "S1 Rekayasa Perangkat Lunak",
  "semester": 2
}
```

Response Body (Success) :

```json
{
  "data": {
    "nim": 6,
    "name": "rendi",
    "prodi": "S1 Rekayasa Perangkat Lunak",
    "semester": 2
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "..."
}
```

## Delete MHS

Endpoint : DELETE /api/mhs/nim

Response Body (Success) :

```json
{
  "data": "OK"
}
```

Response Body (Failed) :

```json
{
  "errors": "Nim not found..."
}
```

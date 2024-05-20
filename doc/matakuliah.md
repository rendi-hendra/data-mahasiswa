# Matakuliah API Spec

## Create Matakuliah

Endpoint : POST /api/matakuliah

Request Body :

```json
{
  "name": "Struktur Data",
  "sks": 3
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "Struktur Data",
    "sks": 3
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "Name must not blank, ..."
}
```

## Data Matakuliah

Endpoint : GET /api/matakuliah/:id

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "Struktur Data",
    "sks": "3"
  }
}
```

Response Body (Failed) :

```json
{
  "errors": "..."
}
```

## Update MHS

Endpoint : PATCH /api/matakuliah/:id

Request Body :

```json
{
  "name": "Struktur Data",
  "sks": 1
}
```

Response Body (Success) :

```json
{
  "data": {
    "id": 1,
    "name": "Struktur Data",
    "sks": 1
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

Endpoint : DELETE /api/matakuliah/:id

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

# List Matakuliah

Endpoint : GET /api/mahasiswa/:nim/matakuliah

Response Body (Success) :

```json
{
  "data": [
    {
      "id": 1,
      "name": "Struktur Data",
      "sks": 1
    },
    {
      "id": 2,
      "name": "Basis Data",
      "sks": 2
    }
  ]
}
```

Response Body (Failed) :

```json
{
  "errors": "Mahasiswa is not found"
}
```

### Get appointments by id user

GET: http://localhost:3000/api/v1/appointments/user/id
GET: http://localhost:3000/api/v1/appointments/user/4287c89a-6a92-487a-95dc-20e030e2de4d

result

```json
[
    {
        "id": "d34ba712-3ccb-4fc6-a883-709a0eceaaf8",
        "date": "2024-05-07T09:30:04.000Z",
        "duration": 1,
        "status": "pending",
        "payment": "pending",
        "createdAt": "2024-05-07T04:35:40.000Z",
        "updatedAt": "2024-05-07T04:35:40.000Z",
        "id_user": "4287c89a-6a92-487a-95dc-20e030e2de4d",
        "id_dentist": "1"
    }
]
```

### Get appointments by id dentist

GET: http://localhost:3000/api/v1/appointments/dentist/id
GET: http://localhost:3000/api/v1/appointments/dentist/1

result

```json
[
    {
        "id_user": "4287c89a-6a92-487a-95dc-20e030e2de4d",
        "status": "pending",
        "date": "2024-05-07T09:30:04.000Z",
        "duration": 1,
        "payment": "pending",
        "user_name": "Victor Raul",
        "user_email": "parapruebas144@gmail.com",
        "user_lastname": null
    }
]
```

## User

### Update profile user

PUT: http://localhost:3000/api/v1/users/id
PUT: http://localhost:3000/api/v1/users/4287c89a-6a92-487a-95dc-20e030e2de4d

send

```json
{
    "name": "victor",
    "email": "ttest@gmail.com",
    "lastname": "maye",
    "role": "user",
    "image": "ARCHIVO DE IMAGEN",
    "dni": "123456789",
    "phone": "123456789"
}
```

result

```json
{
    "id": "a802ab4b-9827-4029-858e-59a4aaeb0ff4",
    "name": "victor",
    "email": "parapruebas144@gmail.com",
    "lastname": "maye",
    "dni": null,
    "phone": null,
    "img_url": "https://res.cloudinary.com/drubtqo3l/image/upload/v1715224927/app-db/fgir0uy7txopsp25shdu.jpg"
}
```

## Appointment

### Create appointment

POST: http://localhost:3000/api/v1/appointments

send

```json
{
    "date": "2024-05-12T03:44:53.722Z",
    "duration": 90,
    "id_user": "a53af78d-d3d3-4ee1-9b62-87d3c863044b",
    "id_dentist": "1",
    "id_treatment": "1"
}
```

result

```json
{
    "id": "3e5428b9-c3d0-4f8d-ad93-34efe34adf8b",
    "status": "pending",
    "payment": "pending",
    "date": "2024-05-12T03:44:53.722Z",
    "duration": 90,
    "id_user": "a53af78d-d3d3-4ee1-9b62-87d3c863044b",
    "id_dentist": "1",
    "id_treatment": "1",
    "updatedAt": "2024-05-09T03:48:27.087Z",
    "createdAt": "2024-05-09T03:48:27.087Z"
}
```

### Update appointment

PUT: http://localhost:3000/api/v1/appointments/id
PUT: http://localhost:3000/api/v1/appointments/3e5428b9-c3d0-4f8d-ad93-34efe34adf8b

send

```json
{
    "date": "2024-05-12T03:44:53.722Z",
    "duration": 90,
    "id_treatment": "5"
}
```

result

```json
{
    "message": "Appointment updated",
    "updatedAppointment": [1]
}
```

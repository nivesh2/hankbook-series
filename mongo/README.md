### create user mongo: 
```
use products
db.createUser(
   {
     user: "accountUser",
     pwd: "password",
     roles: [ "readWrite", "dbAdmin" ]
   }
)
```

### Backup the training database
mongodump --db training

### Restore the training database to a new database called training2
mongorestore --db training2 dump/training

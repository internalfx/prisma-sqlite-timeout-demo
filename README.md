# SQLite timeout demo

Steps:
1. Clone the example and run `yarn` or `npm i`
2. Run `sqlite3 prisma/dev.db`
3. Execute these commands to lock the db:
```sql
PRAGMA locking_mode = EXCLUSIVE;
BEGIN EXCLUSIVE;
```
4. Open another terminal and run `npm run start`. The process will hang for 20secs as mentioned in the timeout settings and will throw a busy error after the timeout

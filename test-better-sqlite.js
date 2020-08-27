
const db = require(`better-sqlite3`)(`./prisma/dev.db`, {
  fileMustExist: true,
  timeout: 30000
})

async function main() {
  let data = db.prepare(`
    SELECT * FROM User;
  `).all()
  console.log(data)

  db.prepare(`
    UPDATE User SET name = strftime('%s','now') WHERE email = 'test@email.com';
  `).run()

  data = db.prepare(`
    SELECT * FROM User;
  `).all()
  console.log(data)
}

main()

const admin = Object.freeze({
  matricula: process.env.DEFAULT_ADMIN_REGISTRY,
  password: process.env.DEFAULT_ADMIN_PASSWORD
})

const connection = Object.freeze({
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  host: process.env.DB_URL
})

module.exports = {
  connection,
  admin
}

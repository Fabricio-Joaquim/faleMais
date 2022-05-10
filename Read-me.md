run "yarn" to install dependences

create the .env archive to insert a config environment variables DATABASE_URL = "postgresql://USER:PASSWORD@HOST:PORT/db?schema=public"

run "yarn prisma migrate dev" to connect with the database

run "yarn start" on PORT 3000 or set a PORT in file .env
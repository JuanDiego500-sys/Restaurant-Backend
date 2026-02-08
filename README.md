# Restaurant Backend

This repository contains a small Express + Sequelize application that provides a REST API to manage departments, cities, restaurants and products. It is intended for local development and simple demos.

The README below explains how to install, configure, run and debug the application, and how the main parts of the project work.

## Requirements

- Node.js (v16+ recommended)
- npm
- PostgreSQL (server running locally or accessible remotely)

## Install

1. Install project dependencies:

```bash
npm install
```

2. Create a Postgres database for the project. The default configuration expects:

- database: `restaurantDB`
- user: `postgres`
- password: `postgres`
- host: `localhost`

You can either create a DB with those credentials, or change the connection settings in `.env`.

## How the application works

- Entry point: `src/server.js` — configures Express, CORS (currently limited to `http://localhost:3000`) and mounts routers under the `/api` prefix.
- Database: `src/DataBase/connection.js` — creates the Sequelize instance and connects to Postgres.
- Sync & seeds: `src/DataBase/sync.js` — defines model associations and runs initial seeders located in `src/DataBase/jsonFiles/` (for departments and cities).
- Models: `src/Models` — Sequelize model definitions. Models use `paranoid: true` which enables soft-deletes.
- Controllers: `src/Controllers` — thin async functions that call Sequelize methods and return JSON responses in the shape `{ data }` or `{ error }`.
- Routers: `src/Routers` — Express routers that map HTTP endpoints to controller functions.

Typical flow: an HTTP request reaches a router in `src/Routers`, the router invokes a controller in `src/Controllers`, the controller uses models in `src/Models` which interact with Postgres via the Sequelize connection.

## Seeds

During sync, `src/DataBase/sync.js` calls seed helper functions in `src/DataBase/jsonFiles/` to populate departments and cities. Inspect those files to see the seeded values. If you add or change seed files, update `sync.js` accordingly.

## Run (development)

Start the app with:

```bash
npm start
```

This uses `nodemon` to restart on file changes. The server prints a startup message and listens on the configured `PORT` (default 3000).

If the process exits with errors, check the terminal for Sequelize / Postgres connection errors.

## API overview

All routes are mounted under `/api`. Router files live in `src/Routers`. The project contains routers and controllers for the following areas:

- Departments: `src/Routers/departmentrouter.js` and `src/Controllers/departmentController.js`
- Cities: `src/Routers/cityRouter.js` and `src/Controllers/cityController`
- Restaurants: `src/Routers/restaurantRouter` and `src/Controllers/restaurantController.js`
- Products: `src/Routers/productRouter` and `src/Controllers/productController.js`

Endpoint naming may vary slightly; open the router files to see exact paths. Common patterns used in this project:

- `GET` list endpoints (e.g., `GET /api/listDepartments`)
- `GET /api/resource/:id` to get a single item
- `POST /api/resource` to create
- `PUT /api/resource/:id` or `PATCH` to update
- `DELETE /api/resource/:id` to soft-delete (uses Sequelize `destroy()` with `paranoid`)

Example requests (adjust the path names to match the router files exactly):

```bash
curl http://localhost:3000/api/listDepartments

curl http://localhost:3000/api/listCities

curl -X POST http://localhost:3000/api/restaurants \
	-H "Content-Type: application/json" \
	-d '{"restaurantName":"My Place","cityId":1}'
```

If you want, I can enumerate exact endpoints and example payloads by reading each router file.

## Models & relationships

Models are defined in `src/Models`. Relationships and association rules are created in `src/DataBase/sync.js`. Models use `paranoid: true` for soft-deletes; use `model.restore()` to undo a soft-delete when needed.

## Troubleshooting

- Error: `SequelizeConnectionError` or unable to connect — verify Postgres is running and that credentials in `src/DataBase/connection.js` are correct.
- Server exits immediately when running `npm start` — inspect the terminal for stack traces; most issues are database-related on startup.
- Seed or sync errors — inspect `src/DataBase/sync.js`; seed helper functions are in `src/DataBase/jsonFiles/`.

Useful debugging steps:

```bash
# check node version
node -v

# run server directly (without nodemon) to see full crash logs
node src/server.js
```

## Safety & development notes

- Database credentials are currently hard-coded for convenience. For production or shared repos, move credentials to environment variables and use a `.env` file.
- Controllers follow a minimal style and return `{ data }` or `{ error }` shapes — keep this pattern if you add new controllers.

## Suggested improvements (optional)

- Add Sequelize migrations and use a migration tool instead of relying on sync during runtime.
- Add automated tests for controllers and integration tests for routes.



# Copilot instructions — Restaurant-Backend

Purpose
- Help AI coding agents quickly understand, modify, and extend this Express + Sequelize backend.

Big picture
- Single-process Express app started from [src/server.js](src/server.js). Routes are mounted under `/api`.
- Sequelize + Postgres are used for persistence; connection configured in [src/DataBase/connection.js](src/DataBase/connection.js).
- Models live in [src/Models](src/Models) and define relationships in [src/DataBase/sync.js](src/DataBase/sync.js).

Key components & data flow
- HTTP -> Express routers in [src/Routers](src/Routers). Example: `departmentrouter` exposes `/listDepartments` ([src/Routers/departmentrouter.js](src/Routers/departmentrouter.js)).
- Routers delegate to controller functions in [src/Controllers](src/Controllers). Controllers use Sequelize models directly (e.g., [src/Controllers/productController.js](src/Controllers/productController.js)).
- Models declare `paranoid: true` soft-deletes (see [src/Models/restaurant.js](src/Models/restaurant.js)). Relationships (hasMany/belongsTo) are defined in [src/DataBase/sync.js](src/DataBase/sync.js).

Project-specific conventions (follow these precisely)
- Start command: use `npm start` (runs `nodemon src/server.js`) — see [package.json](package.json).
- DB credentials are hard-coded in [src/DataBase/connection.js](src/DataBase/connection.js). Either create a local Postgres DB named `restaurantDB` with user/password `postgres` or update that file before running.
- Seed behavior: `src/DataBase/sync.js` calls `departmentjson.createDepartments()` and `cityjson.createCities()` during sync. If adding seeds, place them under `src/DataBase/jsonFiles` and follow existing function names.
- Controller patterns: controllers are simple async functions that call Sequelize methods and return JSON `{ data }` or `{ error }`. Keep response shapes consistent with examples in [src/Controllers/*.js](src/Controllers).
- Soft-delete/restore: use model `destroy()` to soft-delete and `restore()` to re-enable; controllers expose both patterns (e.g., product/restaurant controllers).

Integrations & environment
- CORS is locked to `http://localhost:3000` in [src/server.js](src/server.js); update when integrating with a different frontend.
- No environment variable loading is present. Treat `src/DataBase/connection.js` and `src/server.js` as the authoritative config locations.

Debugging & developer workflow
- To run locally:

  1. Ensure Postgres is running and a DB `restaurantDB` exists (or edit connection file).
  2. Install deps: `npm install`
  3. Start dev server: `npm start` (nodemon reloads on changes).

- Logs: server prints a startup message; sync errors log to console in [src/DataBase/sync.js](src/DataBase/sync.js).

When editing code
- Keep controllers thin — business logic in controllers should mirror existing style: call model methods, then `res.status(...).json({ data })` or `{ error }`.
- When adding relations, update [src/DataBase/sync.js](src/DataBase/sync.js) to define associations and ensure `connection.sync()` is invoked.
- Follow model naming: lowercase class name exported (e.g., `restaurant`) and snake-style field names like `restaurantName`.

Files to inspect for context
- [src/server.js](src/server.js)
- [src/DataBase/connection.js](src/DataBase/connection.js)
- [src/DataBase/sync.js](src/DataBase/sync.js)
- [src/Models](src/Models)
- [src/Controllers](src/Controllers)
- [src/Routers](src/Routers)

If something is unclear
- Ask which endpoint, model, or controller to inspect and whether you should modify DB credentials or create migrations/seeders instead of editing `connection.js` directly.

Done: created guidance based on current repository files. If you'd like, I can (a) add environment variable support, (b) convert hard-coded seeds to a seed script, or (c) expand per-endpoint examples.

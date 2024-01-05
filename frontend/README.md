# BMI Solution Task

This is Nick Karch's submission for BMI Solution recruitment process's take-home project.

## Installation

Clone the repo and `npm install`

## Run Frontend and Backend

`npm run dev`

-   "concurrently" runs frontend (vite) and backend (json-server) simultaneously

## Project Structure and misc notes

-   Frontend: React with Vite (JavaScript)
    -   Tailwind utility classes are used for primary styling
    -   React Prop Types are used to satisfy eslint, given non-TypeScript project config
    -   UUID lib is used for dynamic ID creation during new Artist addition
-   Backend/DB: Static JSON served with json-server
-   Artist creation/removal does not write to database and so this state will not persist over browser refreshes

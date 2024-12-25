# A/B Testing App

### For seting up and run the project

```bash
cd backend

npm i

npm run dev
```

```bash
cd frontend

npm i

npm run dev
```

```bash
visit localhost:3000
```

## Frontend:

* Dashboard showing all projects
* Form to create new projects with name and target URL
* Display of generated script code for each project

## Backend:

* API endpoints for creating and listing projects
* In-memory storage of projects
Script generation that:

* Checks if current URL matches target URL
Selects variation (a,b,c,d) based on current hour
Adds ?variation=X to URL

* Static serving of generated scripts

## Example flow:

* User creates project "Homepage Test" targeting "example.com"

* System generates script and stores it as a file

* User adds script tag to their website

* When visitors access example.com, script automatically appends variation parameter based on time
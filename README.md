# Full Stack Development (FSD) Projects

GitHub Repository: https://github.com/charanannangi/fsd

All backend services are deployed on **Render** and all React/Vite frontends are deployed on **Vercel**, synced with the `main` branch of this repository.

## Full-Stack Paired App (`mern-crud-app`)

| Component | Platform | Root Directory | Live URL |
| --- | --- | --- | --- |
| Backend API (`fsd-mern-backend`) | Render | `mern-crud-app/mern-crud-app-main/backend` | https://fsd-mern-backend-q3y4.onrender.com |
| Frontend App (`fsd-mern-frontend`) | Vercel | `mern-crud-app/mern-crud-app-main/frontend` | https://fsd-mern-frontend.vercel.app |

> `fsd-mern-frontend` is configured with `VITE_API_URL=https://fsd-mern-backend-q3y4.onrender.com`. To enable MongoDB persistence on `fsd-mern-backend` (and the Mongoose/MVC/EJS backends below), set `MONGO_URI` (or `MONGO_URL`) to your MongoDB Atlas connection string in Render Environment Variables.

## Backend Services on Render (9)

| # | Service | Root Directory | Live URL | Health / Root Check |
| --- | --- | --- | --- | --- |
| 1 | `fsd-mern-backend` | `mern-crud-app/mern-crud-app-main/backend` | https://fsd-mern-backend-q3y4.onrender.com | `GET /` |
| 2 | `fsd-express-middleware-api` | `express_middleware_api` | https://fsd-express-middleware-api.onrender.com | `GET /` |
| 3 | `fsd-file-persistent-app` | `File-persistent-app` | https://fsd-file-persistent-app-kk06.onrender.com | `GET /` |
| 4 | `fsd-non-persistent-app` | `Non-persistent-app` | https://fsd-non-persistent-app.onrender.com | `GET /` |
| 5 | `fsd-mongodb-express-app` | `mongodb-express-app` | https://fsd-mongodb-express-app.onrender.com | `GET /` (DB connected) |
| 6 | `fsd-mongoose-express-app` | `mongoose_express_app` | https://fsd-mongoose-express-app.onrender.com | `GET /` |
| 7 | `fsd-mvc-express-app` | `mvc_express_app` | https://fsd-mvc-express-app.onrender.com | `GET /` |
| 8 | `fsd-mvc-auth-app` | `mvc_auth_app` | https://fsd-mvc-auth-app.onrender.com | `GET /` |
| 9 | `fsd-template-engine-ejs-app` | `template-engine-ejs-app` | https://fsd-template-engine-ejs-app.onrender.com | `GET /health` |

## Frontend Apps on Vercel (10)

| # | Project | Root Directory | Live URL |
| --- | --- | --- | --- |
| 1 | `fsd-mern-frontend` | `mern-crud-app/mern-crud-app-main/frontend` | https://fsd-mern-frontend.vercel.app |
| 2 | `fsd-react-conditional-rendering` | `react-conditional-rendering-app/react-conditional-rendering-app-main` | https://fsd-react-conditional-rendering-coral.vercel.app |
| 3 | `fsd-react-form-events` | `react-form-events-app/react-form-events-app-main` | https://fsd-react-form-events-seven.vercel.app |
| 4 | `fsd-react-frontend-crud` | `react-frontend-crud-app/react-frontend-crud-app-main` | https://fsd-react-frontend-crud-ochre.vercel.app |
| 5 | `fsd-react-rendering-lists` | `react-rendering-lists-app/react-rendering-lists-app-main` | https://fsd-react-rendering-lists-nine.vercel.app |
| 6 | `fsd-react-router` | `react-router-app/react-router-app-main` | https://fsd-react-router-tau.vercel.app |
| 7 | `fsd-react-state-events` | `react-state-events-app/react-state-events-app-main` | https://fsd-react-state-events-phi.vercel.app |
| 8 | `fsd-react-html-render` | `react_html_render_app/react_html_render_app` | https://fsd-react-html-render-green.vercel.app |
| 9 | `fsd-react-jsx-render` | `react_jsx_render_app/react_jsx_render_app` | https://fsd-react-jsx-render-six.vercel.app |
| 10 | `fsd-react-multiple-components` | `react_multiple_components/react_multiple_components` | https://fsd-react-multiple-components.vercel.app |

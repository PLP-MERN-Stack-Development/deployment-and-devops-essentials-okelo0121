# MERN Todo App - Deployment and DevOps

This is a full MERN stack Todo application demonstrating deployment, CI/CD pipelines, and monitoring setup.

## 🚀 Live Demo

- **Frontend**: [https://your-frontend-url.vercel.app](https://your-frontend-url.vercel.app)
- **Backend API**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)
- **Health Check**: [https://your-backend-url.onrender.com/health](https://your-backend-url.onrender.com/health)

## 📋 Features

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Responsive React frontend
- ✅ Express.js backend with MongoDB
- ✅ Production-ready with security headers
- ✅ Health check endpoint for monitoring
- ✅ CI/CD with GitHub Actions
- ✅ Deployed on Render (backend) and Vercel (frontend)

## 🛠️ Tech Stack

- **Frontend**: React 18, CSS3
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Deployment**: Render (backend), Vercel (frontend)
- **CI/CD**: GitHub Actions

## 📁 Project Structure

```
mern-todo-app/
├── backend/
│   ├── models/
│   │   └── Todo.js
│   ├── routes/
│   │   └── todos.js
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── TodoList.js
│   │   └── TodoForm.js
│   └── package.json
├── .github/
│   └── workflows/
│       ├── backend-ci.yml
│       ├── frontend-ci.yml
│       ├── backend-cd.yml
│       └── frontend-cd.yml
├── .env.example
├── README.md
└── TODO.md
```

## 🚀 Deployment Instructions

### Prerequisites

1. Create accounts on:
   - [GitHub](https://github.com)
   - [MongoDB Atlas](https://www.mongodb.com/atlas)
   - [Render](https://render.com)
   - [Vercel](https://vercel.com)

2. Install Node.js (v18+) and npm

### 1. Set up MongoDB Atlas

1. Create a new cluster in MongoDB Atlas
2. Create a database user with read/write permissions
3. Whitelist your IP (or 0.0.0.0/0 for all)
4. Get your connection string

### 2. Deploy Backend to Render

1. Connect your GitHub repository to Render
2. Create a new Web Service
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add environment variables:
   - `MONGODB_URI`: Your MongoDB connection string
   - `PORT`: 10000 (or Render's default)
6. Deploy

### 3. Deploy Frontend to Vercel

1. Connect your GitHub repository to Vercel
2. Import the `frontend` folder as the root directory
3. Add environment variable:
   - `REACT_APP_API_URL`: Your Render backend URL + `/api`
4. Deploy

### 4. Configure CI/CD

The GitHub Actions workflows are already set up. Add these secrets to your repository:

**For Backend CD:**
- `RENDER_API_KEY`: Your Render API key
- `RENDER_SERVICE_ID`: Your Render service ID

**For Frontend CD:**
- `VERCEL_TOKEN`: Your Vercel token

## 🔧 Local Development

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm start
```

Create a `.env` file in the backend folder with your MongoDB URI.

## 📊 API Endpoints

- `GET /health` - Health check
- `GET /api/todos` - Get all todos
- `GET /api/todos/:id` - Get single todo
- `POST /api/todos` - Create new todo
- `PUT /api/todos/:id` - Update todo
- `DELETE /api/todos/:id` - Delete todo

## 🔍 Monitoring

- Health check endpoint: `/health`
- Server logs available in Render dashboard
- Frontend performance monitoring via Vercel Analytics

## 📸 Screenshots

### CI/CD Pipeline
![CI/CD Pipeline](https://via.placeholder.com/800x400?text=CI%2FCD+Pipeline+Screenshot)

### Deployed Application
![Todo App](https://via.placeholder.com/800x400?text=Todo+App+Screenshot)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

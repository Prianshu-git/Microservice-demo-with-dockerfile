# Microservice Demo

A simple microservice application with React frontend and Node.js backend.

## Architecture
- Frontend: React.js
- Backend: Node.js/Express
- Container: Docker
- Proxy: Nginx

## Quick Start

### Using Docker Compose
```bash
docker-compose up --build
```

### Manual Setup
#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend
```bash
cd frontend
npm install
npm start
```

## API Endpoints
- GET /api/items - Fetch all items
- POST /api/items - Add new item

## Project Structure
```
microservice-demo/
├── backend/
│   ├── src/
│   │   └── app.js
│   ├── Dockerfile
│   └── package.json
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml
└── README.md
```
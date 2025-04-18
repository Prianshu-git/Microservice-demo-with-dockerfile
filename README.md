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
 
## The UI should look like this
![Screenshot 2025-04-19 at 04-57-58 React App](https://github.com/user-attachments/assets/f212a13a-558b-41de-8f86-0b2b326d8fa8)
![Screenshot 2025-04-19 at 04-58-24 ](https://github.com/user-attachments/assets/13cc60c3-3a77-4b63-88ca-9482a1dc0d61)



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

# Full-Stack React/Node.js Template

A starter template for full-stack apps using React (frontend) and Node.js/Express (backend), optimized for GitHub Codespaces.

## Setup

1. Use this repo as a template: Click "Use this template" on GitHub.
2. Create a Codespace: Click **Code > Codespaces > Create codespace on main**.
3. Wait for the container to build (uses `.devcontainer`).
4. Run the app:
   ```bash
   docker-compose up
   ```
5. Access:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000/api/hello

## Development
- Frontend: cd frontend && npm start
- Backend: cd backend && npm start
- Add features (e.g., database, auth) as needed.

## Notes
- Proxy is set up to avoid CORS issues (frontend proxies to backend).
- Extend with React Router, Redux, or a database as needed.

### `.devcontainer/Dockerfile`
Base image with Node.js v20, compatible with Codespaces.


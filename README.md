# Familienzentrum Kaufungen e.V. Website

This repository contains the code for the _Familienzentrum Kaufungen e.V._ website, a SvelteKit frontend with a Directus backend.

## Deployment Instructions

### Prerequisites

- Docker and Docker Compose installed on your server
- GitHub Container Registry (GHCR) access
- SSH access to your production server

### Deployment Steps

1. **CI/CD Pipeline**

   The repository is set up with GitHub Actions. Every push or merge to the `main` branch automatically:
   - Builds a new Docker image
   - Tags it with the commit SHA and `latest`
   - Pushes it to GitHub Container Registry

2. **Login to GitHub Container Registry**

   On your server, authenticate with the GitHub Container Registry:

   ```bash
   echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin
   ```

3. **Set up on the Server**

   - Copy the `docker-compose.yaml` file to your server
   - Create the required directory structure:

     ```bash
     mkdir -p backend/database backend/uploads backend/extensions
     ```

4. **Configure Environment Variables**

   Update the environment variables in the `docker-compose.yaml` file:

   ```yaml
   frontend-prod:
     environment:
       API_TOKEN: your-actual-token
       API_URL: 'https://your-directus-url/api'
       PUBLIC_ASSET_URL: 'https://your-directus-url/assets'

   directus:
     environment:
       # Update PUBLIC_URL and other settings as needed
       PUBLIC_URL: 'https://your-directus-url/'
       SECRET: 'your-secure-secret-key'
   ```

5. **Database Setup**

   - Place your `data.db` SQLite database file in the `backend/database` directory
   - If you're setting up a new instance, the file will be created automatically
   - For restoring from backup, simply copy your backup file to this location

   **Transferring Database Files with SCP:**
   ```bash
   # Copy data.db from local machine to server
   scp path/to/local/data.db username@server-ip:/path/to/website/backend/database/data.db

   # Copy data.db from server to local machine (for backup)
   scp username@server-ip:/path/to/website/backend/database/data.db path/to/local/backup/data.db
   ```

6. **Start the Services**

   ```bash
   docker compose --profile production pull
   docker compose --profile production up -d
   ```

7. **Verify Deployment**

   Access your website and admin panel to ensure everything is working correctly.

## Development Setup

### Prerequisites

- Node.js (LTS version recommended)
- npm, pnpm, or yarn

### Development Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/familienzentrum-kaufungen/website.git
   cd website
   ```

2. **Set up environment variables**

   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Configure the environment variables:
     - For local development with a local Directus instance, use Docker Compose with the development profile
     - Alternatively, connect to the production Directus instance using API keys (obtain from your Directus admin panel)

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Start the development server**

   ```bash
   # Start Directus if you're using a local instance
   docker compose --profile development up -d

   # Start the frontend development server
   npm run dev
   ```

5. **Access your development environment**

   - Frontend: [http://localhost:5173](http://localhost:5173)
   - Directus (if running locally): [http://localhost:8055](http://localhost:8055)

## Additional Information

### Project Structure

- `/src` - SvelteKit frontend application
- `/backend` - Mounted volumes for Directus (database, uploads, extensions)

### Common Tasks

- **Update the website**: Push to main branch, pull the latest image on the server
- **Backup the database**: Copy `backend/database/data.db` to a safe location
- **Restore from backup**: Replace `backend/database/data.db` with your backup file

### Troubleshooting

- If the frontend can't connect to Directus, check your API_URL and API_TOKEN
- For permission issues with mounted volumes, ensure proper ownership of directories

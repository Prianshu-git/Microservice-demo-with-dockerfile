# Stage 1: Build dependencies
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Stage 2: Create final image
FROM node:18-alpine
WORKDIR /app

# Copy production dependencies
COPY --from=builder /app/node_modules ./node_modules

# Copy application files
COPY . .

# Environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose port and run
EXPOSE 3000
CMD ["node", "src/app.js"]
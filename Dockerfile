# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Step 4: Install the dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the Next.js application (for production)
RUN npm run build

# Step 7: Expose the application on port 3000
EXPOSE 3000

# Step 8: Start the Next.js application
CMD ["npm", "run", "dev"]

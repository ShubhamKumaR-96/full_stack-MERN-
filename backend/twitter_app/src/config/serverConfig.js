import dotenv from 'dotenv'

dotenv.config()   // Load envirmonent variables from .env files

export const PORT=process.env.PORT || 3001    // define a port variable
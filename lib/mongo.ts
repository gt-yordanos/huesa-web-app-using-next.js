import mongoose from 'mongoose';

const MONGO_URI = process.env.MONGO_URI || 'your-mongo-uri-here';

// Ensure MONGO_URI is defined
if (!MONGO_URI) {
  throw new Error('Please define the MONGO_URI environment variable');
}

// Declare global.mongoose to avoid errors
declare global {
  var mongoose: any; // This must be a `var` and not a `let / const`
}

// Global cache to avoid multiple connections in development
let cached = global.mongoose || { conn: null, promise: null };

// Create a connection if not cached
async function dbConnect() {
  // If a cached connection exists, return it
  if (cached.conn) {
    return cached.conn;
  }

  // If no cached promise, create a new connection
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGO_URI).then(mongooseInstance => mongooseInstance);
  }

  // Await the promise and assign the connection to cache
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;

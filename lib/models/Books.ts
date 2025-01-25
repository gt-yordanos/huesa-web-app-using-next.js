import mongoose from 'mongoose';

// Define the schema for Books
const bookSchema = new mongoose.Schema({
  // Book Title
  title: { type: String, required: true },

  // Author Name
  authorName: { type: String, required: true },

  // Book Link
  bookLink: { type: String, required: true, match: /https?:\/\/.+/ },

  // Category with predefined enum values
  category: { 
    type: String, 
    required: true, 
    enum: [
      'Economics', 
      'Finance', 
      'Management', 
      'Accounting', 
      'Business Analytics', 
      'Maths', 
      'General'
    ] 
  },

  // Timestamps
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

// Middleware to update the `updatedAt` field whenever a document is modified
bookSchema.pre('save', function (next) {
  this.updatedAt = new Date();
  next();
});

// Create the model for Books
const Book = mongoose.model('Book', bookSchema);

export default Book;
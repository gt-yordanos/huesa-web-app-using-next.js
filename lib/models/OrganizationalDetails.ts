import mongoose from 'mongoose';

const OrganizationalDetailSchema = new mongoose.Schema({
  // Contact information
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true, match: /.+\@.+\..+/ },
  
  // Admin credentials for organization management
  adminUsername: { type: String, required: true, unique: true }, // Cannot be changed
  password: { type: String, required: true }, // Can be updated (ensure hashing)

  // Social media links
  linkedInLink: { type: String, match: /https?:\/\/(www\.)?linkedin\.com\/.+/ },
  instagramLink: { type: String, match: /https?:\/\/(www\.)?instagram\.com\/.+/ },
  facebookLink: { type: String, match: /https?:\/\/(www\.)?facebook\.com\/.+/ },
  twitterLink: { type: String, match: /https?:\/\/(www\.)?twitter\.com\/.+/ },
  telegramLink: { type: String, match: /https?:\/\/(www\.)?t\.me\/.+/ },
  youtubeLink: { type: String, match: /https?:\/\/(www\.)?youtube\.com\/.+/ },

  // Office information
  officeLocation: { type: String, required: true },

  // Timestamp
  createdAt: { type: Date, default: () => new Date() },
  updatedAt: { type: Date, default: () => new Date() },
});

// Middleware to update the `updatedAt` field whenever a document is modified
OrganizationalDetailSchema.pre('save', function (next) {
  this.updatedAt = new Date(); // Convert to NativeDate
  next();
});

const OrganizationalDetail = mongoose.model('OrganizationContact', OrganizationalDetailSchema);
export default OrganizationalDetail;

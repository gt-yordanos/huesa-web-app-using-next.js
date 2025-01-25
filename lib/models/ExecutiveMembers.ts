import mongoose from 'mongoose';

const executiveMemberSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
  linkedInProfile: { type: String, match: /https?:\/\/(www\.)?linkedin\.com\/.+/, required: false },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  role: {
    type: String,
    enum: [
      'President',
      'Vice President',
      'Secretary',
      'Public Relation Head',
      'Financial Head',
      'Membership Coordinator',
      'Event and Planning Executive',
      'Research Head',
      'Academic Executive',
    ],
    required: true,
    unique: true, // Ensures only one member per role
  },
  createdAt: { type: Date, default: Date.now },
});

// Ensure the unique constraint is enforced at the database level
executiveMemberSchema.index({ role: 1 }, { unique: true });

const ExecutiveMember = mongoose.model('ExecutiveMember', executiveMemberSchema);
export default ExecutiveMember;

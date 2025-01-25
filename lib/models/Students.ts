import mongoose, { Schema, model, models } from 'mongoose';

const StudentSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: { type: String, required: true },
  lastName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  department: {
    type: String,
    enum: [
      'Economics',
      'Accounting',
      'Management',
      'PADM',
      'Cooperative',
    ],
    required: true,
  },
  year: { type: String, required: true },
  sex: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  focusArea: {
    type: String,
    enum: [
      'Public Relations',
      'Finance',
      'Academic',
      'Research',
      'Membership',
      'Event Planning',
    ],
    required: true,
  },
});

const Student = models.Student || model('Student', StudentSchema);

export default Student;

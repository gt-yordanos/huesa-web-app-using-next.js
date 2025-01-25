import mongoose, { Schema, model, models } from 'mongoose';

const EventSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  attendees: [{
    type: String,
    enum: ['Huesa Members', 'Economics Students', 'Accounting Students', 'Management Students', 'PADM Students', 'Cooperative Students', 'Any one'],
    required: true,
  }],
});

const Event = models.Event || model('Event', EventSchema);

export default Event;

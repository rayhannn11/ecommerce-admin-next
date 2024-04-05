import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 24 },
  email: { type: String, required: true, unique: true, maxlength: 36 },
  level: { type: Number, default: 0, maxlength: 2 },
});

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);

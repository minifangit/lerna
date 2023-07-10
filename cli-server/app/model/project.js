module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const PostSchema = new Schema({
    name: { type: String },
    npmName: { type: String },
    value: { type: String },
    version: { type: String }
  });
  return mongoose.model('Project', PostSchema);
};

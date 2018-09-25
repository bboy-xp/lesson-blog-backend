module.exports = app => {
  const mongoose = app.mongoose;
  const BlogSchema = new mongoose.Schema({
    title: { type: String },
    author: { type: String },
    content: { type: String },
  }, {
      timestamps: true,
    });

  return mongoose.model('Blog', BlogSchema);
}
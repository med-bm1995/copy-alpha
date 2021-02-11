import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  userid: { type: String, required: true },
  email: { type: String, required: true },
  creator: { type: String, required: true },
  photo: { type: String, required: false },
  name_ref: { type: String, required: true },
  marque: { type: String, required: true },
  tags: { type: [String], required: true },
  prix: Number,
  description: { type: [String], required: true },
  review_video: { type: String, required: true },
  game_played: { type: [String], required: true },
  like: {
    type: Number,
    default: 0,
  },
  likesid: {
    type: [String],
    default: [],
  },
  date_post: {
    type: Date,
    default: Date(),
  },
});

const PostMessage = mongoose.model("PostMessage", postSchema);
export default PostMessage;

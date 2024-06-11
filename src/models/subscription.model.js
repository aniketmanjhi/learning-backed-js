import mongoose, { Schema } from "mongoose";

const subscriptionSchema = new Schema({
  subscriber: {
    type: mongoose.Types.ObjectId, // One who is subscribing
    ref: "User",
  },
  chennal: {
    type: mongoose.Types.ObjectId, // One to whom 'subscriber is subscribing'
    ref: "User",
  },
});

export const Subscription = mongoose.model("Subscription", subscriptionSchema);

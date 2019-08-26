import { Document, Model, model, Schema } from "mongoose";

export interface Example extends Document {
  name: string;
  creted: Date;
}

export const ExampleSchema: Schema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  created: {
    type: Schema.Types.String,
    default: Date.now()
  }
});

export const Example: Model<Example> = model<Example>("Example", ExampleSchema);

const { Schema, model } = require('mongoose'); 

const reactionsSchema = new Schema (
    {
        reactionID: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            get: (date) => {
              if (date) return date.toISOString().split('T')[0];
            }
          },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
      }
)

// const Reaction = model('reaction', reactionsSchema);

module.exports = reactionsSchema;
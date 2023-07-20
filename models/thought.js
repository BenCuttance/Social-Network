const { Schema, model } = require('mongoose'); 

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true, 
            maxlength: 280,
            minlength: 1
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
          reactions: {
            reactions: [reactionsSchema]
            // or reactions: Number?
          }
        },
        {
            toJSON: {
                virtuals: true,
            },
            id: false,
        }
)

thoughtSchema
.virtual('reactionCount')
.get(function (){
    return this.reactions.length
})

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
    }
)

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
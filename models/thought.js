const { Schema, model } = require('mongoose'); 
const Reaction = require('./reaction')


// Schema to create thought model
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
          reactions: [Reaction],
            
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


const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
//we create this model with the help of mongoose so we require that package

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var VocabularySchema = new Schema(
    {
        word: {type: String, required: true, max: 100},
        kind: {type: String, required: true, max: 20}, //is it a noun, a verb, pronoun or a adjectiv
        detail: {type: String, required: false, max: 20}, //is it masculine, plural, which root does it have
        meaning1: {type: String, required: true, max: 200},
        meaning2: {type: String, required: false, max: 200},
        meaning3: {type: String, required: false, max: 200},
        meaning4: {type: String, required: false, max: 200},
        meaning5: {type: String, required: false, max: 200},
        meaning6: {type: String, required: false, max: 200},
        meaning7: {type: String, required: false, max: 200},
        meaning8: {type: String, required: false, max: 200},
        meaning9: {type: String, required: false, max: 200},
        example1: {type: String, required: false, max: 200},
        example2: {type: String, required: false, max: 200},
        example3: {type: String, required: false, max: 200},
        example4: {type: String, required: false, max: 200},
        example5: {type: String, required: false, max: 200},
        example6: {type: String, required: false, max: 200},
        example7: {type: String, required: false, max: 200},
        comment: {type: String, required: false, max: 250},

    }
)

//TODO decide on if virtuals make any sense here and read the docs:
// https://mongoosejs.com/docs/guide.html#virtuals

//Export model
module.exports = mongoose.model('Vocabulary', VocabularySchema);
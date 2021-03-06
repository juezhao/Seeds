const { model, Schema } = require('mongoose')

const schema = new Schema({
    author: String,
    title: String,
    journal: String,
    year: String,
    volume: String,
    number: String,
    pages: String,
    month: String,
    claim: String,
    SEPractice: String,
    StrengthEvidence: String
})

module.exports = model('Article', schema)

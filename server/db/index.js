const mongoose = require('mongoose')

const uri = "mongodb+srv://xxxggg:kln651kovbpZKSYP@mernatoz.nrnud.mongodb.net/SEER?retryWrites=true&w=majority";

mongoose.connect(uri, {
    authSource: 'admin',
    // auth: {
    //     user: 'admin',
    //     password: '123456'
    // },
    useNewUrlParser: true,
    useUnifiedTopology: true
})
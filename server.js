const config =  require('./config.js');
const express =  require('express');
const app =  express();
const cors = require('cors');


console.log(`NODE_ENV=${config.NODE_ENV}`);
console.log(`${config.HOST}`);
console.log(`${config.MONGOOSE_URI}`);



app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello World !!');
});

app.get('/testMsg', (req, res) => {
    try {
        res.status(200).json({message: "Test Successfull !!"});
    }
    catch(err) {
        res.status(500).json({err_msg: "Error occured while fetching data"});
    }
});

app.listen(config.PORT, () => {
    if (config.NODE_ENV === 'production') {
        console.log(`APP DEPLOYED ON ${config.HOST}`);
    }
    else {
        console.log(`APP LISTENING ON PORT http://localhost:${config.PORT}`);
    }
})
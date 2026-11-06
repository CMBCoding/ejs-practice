//Import express from 'express'
import express from 'express';

const app = express();
const PORT = 3008;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const person = {
        name: 'Donald Duck', 
        occupation: 'plumber',
        favoriteColor: 'white'
    };
    res.render('home', {person});
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
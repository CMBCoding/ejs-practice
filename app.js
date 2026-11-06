//Import express from 'express'
import express from 'express';

const app = express();
const PORT = 3008;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const person = {
        name: 'Donald Duck', 
        occupation: 'Welder',
        favoriteColor: 'black'
    };
    res.render('home', {person});
});

app.get('/friends', (req, res) => {

    const friends = ['Mickey', 'Goofy', 'Minnie', 'Daisy'];
    const movies = [
        'Spider-Man 2', 
        'Captain America: The Winter Soldier', 
        'Star Wars: Episode III: Revenge of the Sith',
        'Transformers: Revenge of the Fallen', 
        'Godzilla: King of the Monsters'
    ]

    res.render('friends', {friends, movies});
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
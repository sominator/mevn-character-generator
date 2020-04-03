const express = require('express');
const router = express.Router();
const Character = require('./character');

router.get('/', async (req, res) => {
    try {
        const characters = await Character.find();
        res.json(characters);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const character = new Character({
        name: req.body.name,
        profession: req.body.profession
    });
    try {
        const newCharacter = await character.save();
        res.status(201).json(newCharacter);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
  console.log(req.params.id)
  const deletedCharacter = await Character.findByIdAndRemove({_id: req.params.id})
  console.log(`The Character ${deletedCharacter.name} has been deleted`)
})

module.exports = router;

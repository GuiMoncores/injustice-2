const characters = document.querySelectorAll('.character');

characters.forEach((character) => {
    character.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removeCharacterSelection();

        character.classList.add('selected');

        changeImageSelectedCharacter(character);

        changeNameCharacter(character);
        
        changeDescriptionCharacter(character);
        
    })
});

function removeCharacterSelection() {
    const selectedCharacter = document.querySelector('.selected');
    selectedCharacter.classList.remove('selected');
}

function changeImageSelectedCharacter(character) {
    const imageBigCharacter = document.querySelector('.big-character');
    const idCharacter = character.attributes.id.value;
    imageBigCharacter.src = `./src/imagens/${idCharacter}.png`;
}

function changeNameCharacter(character) {
    const characterName = document.getElementById('character-name');
    characterName.innerText = character.getAttribute('data-name');
}

function changeDescriptionCharacter(character) {
    const descriptionCharacter = document.getElementById('description-character');
    descriptionCharacter.innerText = character.getAttribute('data-description');
}
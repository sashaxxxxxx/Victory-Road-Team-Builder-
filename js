document.querySelectorAll('.addPlayer').forEach(button => {
    button.addEventListener('click', function() {
        const playerName = this.parentElement.getAttribute('data-player');
        addPlayerToTeam(playerName);
    });
});

function addPlayerToTeam(playerName) {
    const teamList = document.getElementById('teamList');
    const listItem = document.createElement('li');
    listItem.textContent = playerName;
    teamList.appendChild(listItem);
}
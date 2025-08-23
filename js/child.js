//CREATE element and set innertext or innerhtml

const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';

//find the parent where you will add the child

const playersList = document.getElementById('player-list');

//append the child with the parent

playersList.appendChild(newChild); 
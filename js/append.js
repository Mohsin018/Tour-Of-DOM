// console.log('Append file connected');

//1. Parent Node

const mainContainer = document.getElementById('main-container');
// console.log(mainContainer)



//2. create child node

const newSection = document.createElement('section');

//create h1
const h1 = document.createElement('h1');
h1.innerText = 'places i want to visit'
newSection.appendChild(h1);

const ul = document.createElement('ul');

const li1 =document.createElement('li');

li1.innerText = 'bandarban';


//connect li with ul
ul.appendChild(li1);

//connect with the section
newSection.appendChild(ul);


//3. append means add newSection to the mainContainer

mainContainer.appendChild(newSection)


//easier to create HTML
const booksSection = document.createElement('section');

booksSection.innerHTML = `

    <h1> Books i need to read </h1>

    <ul>
        <li> Physics </li>
        <li> Chemistry </li>

    </ul>

`

mainContainer.appendChild(booksSection);
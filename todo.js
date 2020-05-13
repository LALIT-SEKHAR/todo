const ullist = document.querySelector('#ullist');
const input = document.querySelector('#input');
const buttonn = document.querySelector('#button');
const deleteimg = document.querySelector('#deleteimg');
const list = document.querySelector('li');

const addlist = () => {
    if (input.value !== '') {
        let todo = input.value;
        // console.log(todo);
        let li = document.createElement('li');
        let text = document.createTextNode(`${todo}`);
        let divOne = document.createElement('div');
        let divTwo = document.createElement('div');
        let img = document.createElement('img');

        img.src = "interface.png";
        img.setAttribute("id", "deleteimg");

        divOne.classList.add('divOne');
        divTwo.classList.add('divTwo');

        divOne.appendChild(text);
        divTwo.appendChild(img);
        li.appendChild(divOne);
        li.appendChild(divTwo);
        ullist.appendChild(li);
        input.value = '';
    } else {
        //TODO:  add warning;
    }
}

const deletelist = () => {
    li.style.display = 'none';
    console.log('delete');
    
}

buttonn.addEventListener('click', addlist);
deleteimg.addEventListener('click', deletelist);


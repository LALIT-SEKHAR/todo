const ullist = document.querySelector('#ullist');
const input = document.querySelector('#input');
const buttonn = document.querySelector('#button');

const addlist = () => {
    let todo = input.value;
    // console.log(todo);
    let li = document.createElement('li');
    let text = document.createTextNode(`${todo}`);
    li.appendChild(text);
    ullist.appendChild(li);
    input.value = '';
}

buttonn.addEventListener('click', addlist);


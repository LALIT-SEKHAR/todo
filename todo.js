const ullist = document.querySelector('#ullist');
const input = document.querySelector('#input');
const buttonn = document.querySelector('#button');

const addlist = () => {
    if (input.value !== '') {
        let todo = input.value;
        // console.log(todo);
        let li = document.createElement('li');
        let text = document.createTextNode(`${todo}`);
        li.appendChild(text);
        ullist.appendChild(li);
        input.value = '';
    } else {
        //TODO:  add warning;
    }
}

buttonn.addEventListener('click', addlist);


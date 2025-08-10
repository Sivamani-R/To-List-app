const toDoArray = [];
let html = '';

function render() {
    let html = '';
    for (let i = 0; i < toDoArray.length; i++) {
        const cur = toDoArray[i];
        const name = cur.name;
        const date = cur.date;
        const temp = `
        <div>${name}</div>
        <div>${date}</div> 
        <button class="delete-button" onclick="
        toDoArray.splice(${i}, 1);
        render();" 
        >
        Delete
        </button>
        `;
        html += temp;
    }
    const divEl = document.querySelector('.js-display');
    divEl.innerHTML = html;

}
function add() {
    const text = document.querySelector('.js-input');
    const name = text.value;
    const dinput = document.querySelector('.js-date');
    const date = dinput.value;
    toDoArray.push({
        name,
        date
    });
    text.value = '';
    dinput.value = '';
    render();

}


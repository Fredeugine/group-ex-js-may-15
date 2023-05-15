const refreshBtn = document.querySelector('.refresh')
const loadMemory = document.querySelector('.lfm')
const save = document.querySelector('.save')
const container = document.querySelector('.container')

var data;

async function fetchData() {
    var response = await fetch('https://jsonplaceholder.typicode.com/todos')
    data = await response.json()
}

async function renderData() {
    await fetchData()
    for (const datum of data) {
        var div = document.createElement('div')
        div.className = 'list-item'
        var h3 = document.createElement('h3')
        h3.className = 'title'
        h3.innerText = datum.title
        var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.className = 'completed'
        checkbox.checked = datum.completed

        div.appendChild(h3)
        div.appendChild(checkbox)
        container.appendChild(div)
    }
}

save.addEventListener('click',function (){
    localStorage.setItem('todos', JSON.stringify(data))
})
loadMemory.addEventListener('click', function () {
    data = JSON.parse(localStorage.getItem('todos'));
});


refreshBtn.addEventListener('click', renderData)


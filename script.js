let totalCount = 0;
let completedCount = 0;

function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
}

function addTask(event) {
    event.preventDefault();

    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value;

    let li = document.createElement('li');
    li.textContent = taskText;

    let doneBtn = document.createElement('button');
    doneBtn.textContent = "Done";
    doneBtn.onclick = function () {
        moveToCompleted(li);
    };

    li.appendChild(doneBtn);
    document.getElementById('taskList').appendChild(li);

    totalCount++;
    updateStats();

    taskInput.value = "";
}

function moveToCompleted(taskItem) {
    taskItem.removeChild(taskItem.querySelector('button'));
    document.getElementById('completedList').appendChild(taskItem);

    completedCount++;
    updateStats();
}

function updateStats() {
    document.getElementById('totalTasks').textContent = totalCount;
    document.getElementById('completedTasks').textContent = completedCount;
}

function saveNote() {
    let noteText = document.getElementById('noteInput').value;
    document.getElementById('savedNote').textContent =
        noteText ? "Saved Note: " + noteText : "";
}

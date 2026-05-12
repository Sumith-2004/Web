const addTaskBtn = document.getElementById("addTaskBtn");
const createModal = document.getElementById("createModal");
const closeCreateModal = document.getElementById("closeCreateModal");

const saveTaskBtn = document.getElementById("saveTaskBtn");
const taskList = document.querySelector(".task-list");

const editModal = document.getElementById("editModal");
const closeEditModal = document.getElementById("closeEditModal");

let selectedTask = null;

addTaskBtn.addEventListener("click", () => {
    createModal.classList.remove("hidden");
});

closeCreateModal.addEventListener("click", () => {
    createModal.classList.add("hidden");
});

saveTaskBtn.addEventListener("click", () => {
    const title = document.getElementById("createTitle");
    const subtitle = document.getElementById("createSubtitle");
    const desc = document.getElementById("createDesc");
    const task = document.createElement("div");
    task.classList.add("task");

    task.innerHTML = `
        <div class="task-head">
            <h4 class="task-title">${title.value}</h4>
            <p class="sub-title">${subtitle.value}</p>
        </div>
        <div class="task-body">
            <p>${desc.value}</p>
        </div>
        <button class="editBtn">Edit</button>
    `;
    taskList.appendChild(task);
    title.value = "";
    subtitle.value = "";
    desc.value = "";
    createModal.classList.add("hidden");
});

taskList.addEventListener("click", (e) => {
    if (e.target.classList.contains("editBtn")) {
        selectedTask = e.target.closest(".task");
        document.getElementById("editTitle").value =
            selectedTask.querySelector(".task-title").innerText;
        document.getElementById("editSubtitle").value =
            selectedTask.querySelector(".sub-title").innerText;
        document.getElementById("editDesc").value =
            selectedTask.querySelector(".task-body p").innerText;
        editModal.classList.remove("hidden");
    }
});

document.getElementById("updateTaskBtn").addEventListener("click", () => {
    if (!selectedTask) return;
    selectedTask.querySelector(".task-title").innerText =
        document.getElementById("editTitle").value;
    selectedTask.querySelector(".sub-title").innerText =
        document.getElementById("editSubtitle").value;
    selectedTask.querySelector(".task-body p").innerText =
        document.getElementById("editDesc").value;
    editModal.classList.add("hidden");
    selectedTask = null;
});

closeEditModal.addEventListener("click", () => {
    editModal.classList.add("hidden");
    selectedTask = null;
});
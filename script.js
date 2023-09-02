// Sélection des éléments HTML
const newTaskInput = document.getElementById("newTask");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === "") return; // Ne pas ajouter de tâche vide

    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${taskText}
        <button class="delete">Supprimer</button>
        <button class="edit">Modifier</button>
    `;
    taskList.appendChild(listItem);

    // Effacer le champ de saisie
    newTaskInput.value = "";

    // Ajouter des gestionnaires d'événements pour la suppression et la modification
    const deleteButton = listItem.querySelector(".delete");
    const editButton = listItem.querySelector(".edit");

    deleteButton.addEventListener("click", () => {
        taskList.removeChild(listItem);
    });

    editButton.addEventListener("click", () => {
        const newText = prompt("Modifier la tâche :", taskText);
        if (newText !== null) {
            listItem.firstChild.textContent = newText;
        }
    });
}

// Ajouter une tâche lorsque le bouton est cliqué
addTaskButton.addEventListener("click", addTask);

// Ajouter une tâche lorsque la touche "Entrée" est pressée dans le champ de saisie
newTaskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

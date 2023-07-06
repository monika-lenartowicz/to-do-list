{
	const tasks = [
		{
			content: "nagrać lekcję",
			done: false,
		},

		{
			content: "zjeść pierogi",
			done: true,
		},
	];

	const addNewTask = newTaskContent => {
		tasks.push({
			content: newTaskContent,
		});
		render();
	};

	const removeTask = index => {
		tasks.splice(index, 1);
		render();
	};

	const toggleTaskDone = index => {
		tasks[index].done = !tasks[index].done;
		render();
	};

	const render = () => {
		let htmlString = "";

		for (const task of tasks) {
			htmlString += `
         <li class="taskContainer__item ${task.done} ? taskContainer__item--done" : ""}">
            <button class="taskContainer__done js-taskContainer__done">
            ${task.done ? "✓" : ""}
            </button>
            <span class ="text ${task.done ? "text__done" : "text__notDone"}">${task.content}</span>
            <button class="taskContainer__remove js-taskContainer__remove">
            🗑️
           </button>
         </li>
      `;
		}

		document.querySelector(".js-tasks").innerHTML = htmlString;

		bindEvents();

		clearTaskValue();
	};

	const bindEvents = () => {
		const removeButtons = document.querySelectorAll(".js-taskContainer__remove");

		removeButtons.forEach((removeButton, index) => {
			removeButton.addEventListener("click", () => {
				removeTask(index);
			});
		});

		const toggleDoneButtons = document.querySelectorAll(".js-taskContainer__done");

		toggleDoneButtons.forEach((toggleDoneButton, index) => {
			toggleDoneButton.addEventListener("click", () => {
				toggleTaskDone(index);
			});
		});
	};

	const onFormSubmit = event => {
		event.preventDefault();
		const newTaskContent = document.querySelector(".js-newTask").value.trim();

		if (newTaskContent === "") return;

		addNewTask(newTaskContent);
	};

	const clearTaskValue = () => {
		const newTaskContent = document.querySelector(".js-newTask");
		const addTaskButton = document.querySelector(".js-addTaskButton");
		addTaskButton.addEventListener("click", () => {
			newTaskContent.focus();
		});

		newTaskContent.value = "";
	};

	const init = () => {
		render();

		const form = document.querySelector(".js-form");
		form.addEventListener("submit", onFormSubmit);
	};

	init();
}

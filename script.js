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
   ]

   const addNewTAsk = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      })
      render();

   }

   const removeTask = (index) => {
      tasks.splice(index, 1);
      render();

   }

   const render = () => {
      let htmlString = " ";

      for (const task of tasks) {
         htmlString += `
         <li class="taskContainer__item">
            <button class="taskContainer__done ">✓</button>
            <span class = "text__done">${task.content}</span>
            <button class="taskContainer__remove js-taskContainer__remove">
            🗑
           </button>
         </li>
        `;
      }
      document.querySelector(".js-tasks").innerHTML = htmlString;

      const removeButtons = document.querySelectorAll(".js-taskContainer__remove")
      removeButtons.forEach((removeButton, index) => {
         removeButton.addEventListener("click", () => {
            removeTask(index);
         });
      });



   };

   const onFormSubmit = (event) => {
      event.preventDefault();

      const newTaskContent = document.querySelector(".js-newTask").value.trim();

      if (newTaskContent === "") {
         return
      }
      addNewTAsk(newTaskContent);
   }

   const init = () => {
      render();

      const form = document.querySelector(".js-form");
      form.addEventListener("submit", onFormSubmit);
   };

   init();
}
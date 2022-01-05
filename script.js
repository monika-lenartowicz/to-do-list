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

   const render = () => {
      let htmlString = " ";

      for (const task of tasks) {
         htmlString += `
         <li class="taskContainer__item">
            <button class="taskContainer__done ">✓</button>
            <span class = "text__done">${task.content}</span>
            <button class="taskContainer__remove">
            🗑
           </button>
         </li>
        
           `;
      }

      document.querySelector(".js-tasks").innerHTML = htmlString;

   }

   const addNewTAsk = (newTaskContent) => {
      tasks.push({
         content: newTaskContent,
      })
      render();

   }

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
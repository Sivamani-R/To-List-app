# Todo List Application

A simple and clean Todo List web application built with HTML, CSS, and JavaScript. This app allows users to add tasks with optional due dates, display them in a list, and delete tasks as needed.

---

## Features

- Add a todo item with a name and an optional due date.
- Display the list of todos in a neat grid layout.
- Delete any todo item by clicking the "Delete" button.
- Clear input fields after adding a todo.
- Keyboard support: Press Enter in either input to add the todo.

---

## Demo

![Todo List Screenshot](./screenshot.png)  
*(Add your own screenshot image in the repo for better presentation)*

---

## Technologies Used

- **HTML5** for the structure.
- **CSS3** Grid layout for styling and responsive alignment.
- **Vanilla JavaScript** for dynamic task addition, rendering, and deletion.

---

## File Structure
/
├── index.html
├── styles/
│ └── todolist.css
└── scripts/
└── todolist.js

---

## How to Use

1. Clone or download this repository.
2. Open `index.html` in your preferred web browser.
3. Type a task name in the "Todo name" input box.
4. (Optional) Select a due date.
5. Click the **Add** button or press **Enter** to add the task.
6. The task will appear in the list below.
7. Click the **Delete** button next to any task to remove it.

---

## Code Explanation

- **index.html**  
  Contains the basic HTML structure with input fields for task name and date, an Add button, and a container to display tasks.

- **styles/todolist.css**  
  Styles the app using CSS Grid for layout and adds simple colors and spacing for usability.

- **scripts/todolist.js**  
  Manages the todo list in an array (`toDoArray`).  
  - `add()` adds a new task object (name and date) to the array and calls `render()`.  
  - `render()` updates the HTML inside the display container, listing all tasks and their delete buttons.

---

## Future Improvements

- Add input validation to prevent empty tasks from being added.
- Save the todo list to local storage for persistence between page reloads.
- Add editing functionality for existing tasks.
- Add task completion toggles with styling for completed tasks.
- Implement filtering/sorting by date or completion status.

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

## Author

Created by [Your Name]  
Feel free to contribute or report issues!

---



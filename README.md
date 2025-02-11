# To-Do App

A simple and responsive To-Do app built with **React**, **TypeScript**, **TailwindCSS**, and **Ant Design**. This app allows users to add, delete, and organize tasks into different categories (To-Do, Doing, Completed). The tasks are stored locally using **localStorage**, so they persist across page reloads.

## Features

- **Add Tasks**: Users can enter task titles, assign tags, and select a status (To-Do, Doing, or Done).
- **Task Management**: Tasks can be categorized and displayed in different columns based on their status.
- **Tag System**: Tags can be assigned to tasks. Tags are clickable and can be selected/deselected.
- **Responsive Design**: The layout adjusts dynamically for different screen sizes using **TailwindCSS**.
- **Persistence**: Tasks are stored in **localStorage** and persist even after page refresh.

## Tech Stack

- **Frontend**:  
  - React
  - TypeScript
  - TailwindCSS
  - Ant Design

- **State Management**: React `useState` and `useEffect` hooks.

- **Storage**: `localStorage` for storing tasks.

## Installation

To run the project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/`.

## Usage

### **Add a Task**
- Enter a title for your task.
- Select tags (Urgent, Important, Later, Low Priority).
- Choose the status of the task (To-Do, Doing, Done).
- Click the **Add Task** button to add it to the respective column.

### **Delete a Task**
- Click the **Delete** button next to any task to remove it.

### **Tags**
- Tags are clickable, and you can select/deselect them for each task.
- Tags are displayed with **Ant Design’s default style**.

## Responsive Design

The layout is fully responsive:
- **Mobile-first design**: 1 column on small screens, 2 columns on medium screens, and 3 columns on large screens.
- The app adjusts the **task columns**, **tags**, and **input fields** for different screen sizes.

## Contributing

1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- **React** and **TypeScript** for building the user interface.
- **TailwindCSS** for utility-first styling.
- **Ant Design** for interactive and well-designed UI components.

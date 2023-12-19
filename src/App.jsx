import { PanelComponent } from "./components/PanelComponent";
import { TasksListComponent } from "./components/TasksListComponent";

export function App() {
  return (
    <main className="flex flex-col items-center h-full w-full">
      <PanelComponent />
      <TasksListComponent />
    </main>
  );
}

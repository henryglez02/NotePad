import { PanelComponent } from "./components/PanelComponent";
import { TasksListComponent } from "./components/TasksListComponent";


export function App() {

  return (
    <main className="  pt-1">
      <PanelComponent  />
      <TasksListComponent  />
    </main>
  );
}

import RenderView from "./components/RenderView";
import SceneRenderer from "./game/SceneRenderer";

function App() {
  return (
    <div>
      <RenderView renderer={SceneRenderer} />
    </div>
  );
}

export default App;

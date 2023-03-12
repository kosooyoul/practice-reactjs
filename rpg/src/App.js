import RenderView from "./components/RenderView";
import SceneRenderer from "./game/SceneRenderer";

function App() {
  const appStyle = { width: '100%', height: '100%' };
  return (
    <div style={appStyle}>
      <RenderView renderer={SceneRenderer} />
    </div>
  );
}

export default App;

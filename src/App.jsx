import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <section>
      <div className="blog">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} index={item} />
        ))}
      </div>
    </section>
  );
}

export default App;

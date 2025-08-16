
import data from "./components/data";
import Card from "./Card";
import "./App.css";

export default function App() {
  return (
    <div className="main">
      <h1 className="title">Product Cards Example</h1>
      <div className="wrapper">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

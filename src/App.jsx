import logoReact from "./assets/react-core-concepts.png"
import componentImg from "./assets/components.png"
const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreComponent(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length)]
  return (
    <header>
      <img src={logoReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Components</h2>
          <ul>
            <CoreComponent
              title="Components"
              description="The core UI building block"
              image={componentImg}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

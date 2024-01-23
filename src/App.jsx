import logoReact from "./assets/react-core-concepts.png"
import componentImg from "./assets/components.png"
import  { CORE_CONCEPTS } from "./data.js"

const reactDescriptions = ['Fundamental', 'Crucial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreComponent({title, description, image}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
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
            <CoreComponent {...CORE_CONCEPTS[0]}/>
            <CoreComponent {...CORE_CONCEPTS[1]}/>
            <CoreComponent {...CORE_CONCEPTS[2]}/>
            <CoreComponent {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

import componentImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data.js"
import Header from './components/Header/Header.jsx';
import CoreComponent from './components/CoreConcept.jsx';


function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Components</h2>
          <ul>
            <CoreComponent {...CORE_CONCEPTS[0]} />
            <CoreComponent {...CORE_CONCEPTS[1]} />
            <CoreComponent {...CORE_CONCEPTS[2]} />
            <CoreComponent {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;

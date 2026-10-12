import DetailPanel from './components/DetailPanel.jsx';
import MasterPanel from './components/MasterPanel.jsx';

function App() {
  return (
    <main className="app-shell">
      <header className="app-header">
        <div className="app-header__brand" aria-hidden="true">
          P
        </div>
        <div>
          <p className="app-header__eyebrow">POKÉDEX</p>
          <h1>Pokemon Explorer</h1>
        </div>
      </header>

      <section className="explorer-layout" aria-label="Pokemon explorer">
        <MasterPanel />
        <DetailPanel />
      </section>
    </main>
  );
}

export default App;

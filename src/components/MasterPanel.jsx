function MasterPanel() {
  return (
    <section className="panel master-panel" aria-labelledby="master-heading">
      <div className="panel__heading">
        <div>
          <p className="panel__eyebrow">BROWSE</p>
          <h2 id="master-heading">Pokemon</h2>
        </div>
      </div>
      <div className="panel__content master-panel__content">
        <p className="empty-state">The Pokemon list will appear here.</p>
      </div>
    </section>
  );
}

export default MasterPanel;

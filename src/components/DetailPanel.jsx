function DetailPanel() {
  return (
    <section className="panel detail-panel" aria-labelledby="detail-heading">
      <div className="panel__heading">
        <div>
          <p className="panel__eyebrow">POKEMON PROFILE</p>
          <h2 id="detail-heading">Details</h2>
        </div>
      </div>
      <div className="panel__content detail-panel__content">
        <div className="detail-placeholder" aria-live="polite">
          <div className="detail-placeholder__mark" aria-hidden="true">
            ?
          </div>
          <h3>Select a Pokemon</h3>
          <p>Choose a Pokemon from the list to see its details here.</p>
        </div>
      </div>
    </section>
  );
}

export default DetailPanel;

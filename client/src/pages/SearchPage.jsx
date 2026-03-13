function SearchPage() {
  return (
    <section>
      <div className="page-header">
        <h2>Search Jobs</h2>
      </div>

      <p className="page-intro">
        Users can search for jobs by keyword, company, or location.
      </p>

      <div className="content-card">
        <h3>Search Features</h3>
        <ul>
          <li>Keyword search bar</li>
          <li>Remote and location filters</li>
          <li>Company name filtering</li>
          <li>Links to detailed job views</li>
        </ul>
      </div>
    </section>
  );
}

export default SearchPage;

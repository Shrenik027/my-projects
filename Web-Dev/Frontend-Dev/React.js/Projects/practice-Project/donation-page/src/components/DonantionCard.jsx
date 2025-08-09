const DonationCards = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "2rem",
      }}
    >
      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Education</h3>
        <p>Support School Programs and suplies!</p>
        <button>Donate Now</button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>HealthCare</h3>
        <p>Provide meds and care for families!</p>
        <button>Donate Now</button>
      </div>

      <div
        style={{ border: "1px solid #ccc", padding: "1rem", width: "200px" }}
      >
        <h3>Food AID</h3>
        <p>Deliver Aid to People!</p>
        <button>Donate Now</button>
      </div>
    </section>
  );
};

export default DonationCards;

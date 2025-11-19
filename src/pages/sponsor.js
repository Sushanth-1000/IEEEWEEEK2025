import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './sponsor.css';
import Navbaring from '../Components/Nav';

const SponsorTier = ({ title, sponsors, tierClass }) => {
  if (!sponsors || sponsors.length === 0) return null;

  return (
    <div className={`sponsor-tier ${tierClass}`}>
      <h3 className="tier-title">{title}</h3>
      <Row className="justify-content-center">
        {sponsors.map((sponsor) => (
          <Col key={sponsor._id} xs={12} md={6} lg={4} className="sponsor-col mb-4">
            <div className="sponsor-card h-100">
              <div className="sponsor-logo-container">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name ? `${sponsor.name} logo` : 'Sponsor logo'}
                  className="sponsor-logo"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x150?text=No+Logo';
                    const card = e.target.closest('.sponsor-card');
                    if (card) {
                      card.classList.add('no-logo');
                    }
                  }}
                />
              </div>
              <div className="sponsor-info">
                <h4 className="sponsor-name">{sponsor.name}</h4>
                {sponsor.website && (
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sponsor-website"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

// ... (keep the imports and SponsorTier component the same)

const Sponsors = () => {
  const [sponsors, setSponsors] = useState({
    title: [],
    diamond: [],
    gold: [],
    silver: [],
    bronze: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const response = await axios.get('https://ieeeweek2025.onrender.com/api/sponsors');
        const sponsorsData = response.data;
        
        // Group sponsors by category
        const groupedSponsors = sponsorsData.reduce((acc, sponsor) => {
          const category = sponsor.category.toLowerCase();
          if (!acc[category]) {
            acc[category] = [];
          }
          acc[category].push(sponsor);
          return acc;
        }, { title: [], diamond: [], gold: [], silver: [], bronze: [] });

        setSponsors(groupedSponsors);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching sponsors:', err);
        setError('Failed to load sponsors. Please try again later.');
        setLoading(false);
      }
    };

    fetchSponsors();
  }, []);

  // ... (keep the loading and error states the same)

  return (
    <>
      <Navbaring />
      <Container className="sponsors-page">
        <div className="sponsors-header">
          <h1>Our Sponsors</h1>
          <p className="sponsors-subtitle">
            We extend our sincere gratitude to our esteemed sponsors for their generous support
          </p>
        </div>

        {sponsors.title.length > 0 && (
          <SponsorTier
            title="Title Sponsor"
            sponsors={sponsors.title}
            tierClass="title-tier"
          />
        )}

        {sponsors.diamond.length > 0 && (
          <SponsorTier
            title="Diamond Sponsors"
            sponsors={sponsors.diamond}
            tierClass="diamond-tier"
          />
        )}

        {sponsors.gold.length > 0 && (
          <SponsorTier
            title="Gold Sponsors"
            sponsors={sponsors.gold}
            tierClass="gold-tier"
          />
        )}

        {sponsors.silver.length > 0 && (
          <SponsorTier
            title="Silver Sponsors"
            sponsors={sponsors.silver}
            tierClass="silver-tier"
          />
        )}

        {sponsors.bronze.length > 0 && (
          <SponsorTier
            title="Bronze Sponsors"
            sponsors={sponsors.bronze}
            tierClass="bronze-tier"
          />
        )}

        <div className="become-sponsor">
          <h3>Interested in becoming a sponsor?</h3>
          <a className="btn btn-primary">Contact<br/>Uday Kumar: +91 74839 39765 <br/><br/>Ninaada Ranga: +91 99860 23708</a>
        </div>
      </Container>
    </>
  );
};

export default Sponsors;
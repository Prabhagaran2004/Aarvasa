import React, { useState } from 'react';
import './realestate.css';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const Realestate = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // Group localities into pages of 2 items each
  const allLocalities = [
    {
      id: 1,
      title: 'Locality Review - Lajpat Nagar, New Delhi',
      videoId: 'OSN_I2a-gdE',
      youtubeUrl: 'https://youtu.be/OSN_I2a-gdE?si=40V_ifW4fr25Nuqk',
    },
    {
      id: 2,
      title: 'Locality Review - East of Kailash, New Delhi',
      videoId: 'OSN_I2a-gdE',
      youtubeUrl: 'https://youtu.be/OSN_I2a-gdE?si=40V_ifW4fr25Nuqk'
    },
    {
      id: 3,
      title: 'Locality Review - Dwarka, New Delhi',
      videoId: 'OSN_I2a-gdE',
      youtubeUrl: 'https://youtu.be/OSN_I2a-gdE?si=40V_ifW4fr25Nuqk'
    },
    {
      id: 4,
      title: 'Locality Review - Rohini, New Delhi',
      videoId: 'OSN_I2a-gdE',
      youtubeUrl: 'https://youtu.be/OSN_I2a-gdE?si=40V_ifW4fr25Nuqk'
    }
  ];

  const itemsPerPage = 2;
  const totalPages = Math.ceil(allLocalities.length / itemsPerPage);
  const currentLocalities = allLocalities.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handleDotClick = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handleVideoClick = (youtubeUrl) => {
    window.open(youtubeUrl, '_blank');
  };

  const insights = [
    {
      id: 1,
      title: 'Sale Deed: Meaning, Format, and Components',
      type: 'document'
    },
    {
      id: 2,
      title: 'What Does RERA Carpet Area Mean',
      type: 'video',
      videoId: 'VIDEO_ID_5',
      youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_5'
    },
    {
      id: 3,
      title: 'What is Rent Agreement Format',
      type: 'video',
      videoId: 'VIDEO_ID_6',
      youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_6'
    },
    {
      id: 4,
      title: 'DLRC Delhi Land Records 2025: How to Check ROR Delhi Land',
      type: 'document'
    },
    {
      id: 5,
      title: 'Circle Rate in Delhi 2024: Area-Wise Categorization',
      type: 'video'
    }
  ];

  const legalUpdates = [
    {
      id: 1,
      title: 'Inheritance Laws In India',
      type: 'video',
      videoId: 'VIDEO_ID_7',
      youtubeUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_7'
    },
    {
      id: 2,
      title: 'DLRC Delhi Land Records 2025',
      type: 'article'
    }
  ];

  return (
    <section className="real-estate-guide">
      <h2>Your Real Estate Guide</h2>
      <div className="guide-container">
        {/* Locality Videos Section */}
        <div className="guide-card">
          <h3>Locality Videos</h3>
          <div className="video-list">
            {currentLocalities.map(item => (
              <div 
                key={item.id} 
                className="video-item"
                onClick={() => handleVideoClick(item.youtubeUrl)}
              >
                <div className="youtube-thumbnail">
                  <img 
                    src={`https://img.youtube.com/vi/${item.videoId}/0.jpg`} 
                    alt={item.title}
                    onError={(e) => {
                      e.target.src = `https://img.youtube.com/vi/${item.videoId}/0.jpg`;
                    }}
                  />
                  <div className="play-overlay">
                    <PlayIcon />
                  </div>
                </div>
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className="card-footer">
            <div className="pagination-dots">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`pagination-dot ${i === currentPage ? 'active' : ''}`}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button className="see-all">
              See all <ChevronRightIcon />
            </button>
          </div>
        </div>

        {/* Industry Insights Section */}
        <div className="guide-card">
          <h3>Industry Insights</h3>
          <div className="insights-list">
            {insights.map(item => (
              <div 
                key={item.id} 
                className="insight-item"
                onClick={() => item.type === 'video' && handleVideoClick(item.youtubeUrl)}
                style={{ cursor: item.type === 'video' ? 'pointer' : 'default' }}
              >
                {item.type === 'video' ? <PlayIcon /> : <div className="doc-icon" />}
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <button className="see-all">
            See all <ChevronRightIcon />
          </button>
        </div>

        {/* Legal Updates Section */}
        <div className="guide-card">
          <h3>Legal Updates</h3>
          <div className="updates-list">
            {legalUpdates.map(item => (
              <div key={item.id} className="update-item">
                {item.type === 'video' ? (
                  <>
                    <div 
                      className="youtube-thumbnail"
                      onClick={() => handleVideoClick(item.youtubeUrl)}
                    >
                      <img 
                        src={`https://img.youtube.com/vi/${item.videoId}/mqdefault.jpg`} 
                        alt={item.title}
                        onError={(e) => {
                          e.target.src = `https://img.youtube.com/vi/${item.videoId}/0.jpg`;
                        }}
                      />
                      <div className="play-overlay">
                        <PlayIcon />
                      </div>
                    </div>
                    <h4>{item.title}</h4>
                    <button onClick={() => handleVideoClick(item.youtubeUrl)}>
                      Watch Video
                    </button>
                  </>
                ) : (
                  <>
                    <img src="/api/placeholder/320/180" alt={item.title} />
                    <h4>{item.title}</h4>
                    <button>Read more</button>
                  </>
                )}
              </div>
            ))}
          </div>
          <div className="card-footer">
            <button className="see-all">See all</button>
            <button className="explore">Explore Services</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Realestate;

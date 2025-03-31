import React from 'react';
import './infocard.css';

function App() {
  return (
    <div className="infocontainer">
      {/* Left Half - Image Placeholder */}
      <div className="info-left">
        <img src="/whyaarvasa.png" alt="Why Aarvasa" />
      </div>

      {/* Right Half */}
      <div className="info-right">
        {/* Column 1 */}
        <div className="column1">
          <div className="row">
            <div className="box small">
              <img src="/image 192.png" alt="Comprehensive Consultancy" />
              <h3>Comprehensive Consultancy</h3>
            </div>
            <div className="box small">
              <img src="/image 194.png" alt="AR/VR Property" />
              <h3>AR/VR Property</h3>
            </div>
          </div>
          <div className="box large">
            <img src="/image 195.png" alt="Horizontal Feature" />
            <h3>Flexible Payment Model</h3>
          </div>
        </div>
{/* Column 2 */}
<div className="column2">
  {/* Sub-column 1 */}
  <div className="sub-column">
    <div className="box">
      <img src="/image 196.png" alt="Blockchain-Backed Transaction" />
      <h3>Blockchain-Backed Transaction</h3>
    </div>
  </div>

  {/* Sub-column 2 */}
  <div className="sub-column">
    <div className="box2">
      <img src="/image 197.png" alt="Additional Feature" />
      <h3>Monetization of Existing Properties</h3>
    </div>
  </div>
</div>
</div>
    </div>
  );
}

export default App;

import React from 'react';

function operation() {
    return (
      <div>
        <h1>Viewer MRI</h1>
        <iframe
          src="https://mri-viewer.opensource.epam.com/"
          title="MRI Viewer"
          width="100%"
          height="600px"
          frameBorder="0"
        ></iframe>
      </div>
    );
}

export default operation;

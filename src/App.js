import React from 'react';
import CopyApp from './components/CopyApp';
import MediaPlayer from './components/MediaPlayer';
import LoadingApp from './components/LoadingApp';

function App() {
  return (
    <div className="App container">
      <CopyApp />
      <hr />
      <MediaPlayer />
      <hr />
      <LoadingApp />
      <hr />
    </div>
  );
}

export default App;

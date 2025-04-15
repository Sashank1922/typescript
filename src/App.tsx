import { useState } from 'react';
import './App.css';
import ImageTemplate from './components/imagetemplate';
import { ImageData, Response } from './interfaces/hello';
 
function App() {
  const [userValue, setUserValue] = useState('');
  const [imageDatas, setImageDatas] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
 
  const fetchData = async () => {
    try {
      if (!userValue) {
        alert('Enter something');
        return;
      }
      setLoading(true);
      const response = await fetch(`https://api.openverse.org/v1/images/?q=${userValue}`);
      const data = await response.json();
      const imageInfos = data as Response;
      setImageDatas(imageInfos.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
 
  const displayImages = () => {
    return imageDatas.map((value, index) => (
      <ImageTemplate key={index} imageData={value} />
    ));
  };
 
  return (
    <div>
      <input
        value={userValue}
        onChange={(e) => setUserValue(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={fetchData}>Search</button>
 
      {loading && <p>Loading...</p>}
 
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          gridAutoRows: 'auto',
          gap: '20px',
          padding: '9px',
        }}
      >
        {displayImages()}
      </div>
    </div>
  );
}
 
export default App;
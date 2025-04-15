import { ImageData } from "../interfaces/hello";
 
const ImageTemplate = ({ imageData }: { imageData: ImageData }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <img
        style={{ width: '200px', height: '200px' }}
        src={imageData.thumbnail}
        alt={imageData.title}
      />
      <h2>{imageData.title}</h2>
    </div>
  );
};
 
export default ImageTemplate;
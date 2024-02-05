import "./LoadingPage.scss";
import { SpinnerCircular } from 'spinners-react';

function LoadingPage() {
  return (
    <div className="loading-page">
        <h2>Loading... Please Wait</h2>
        <SpinnerCircular color="#0f172a"/>
    </div>
  );
}

export default LoadingPage;

import CovidChart from '../components/CovidStats';
import SpendingChart from '../components/SpendingChart';

const HomePage = () => {
  return (
    <div>
  
      <CovidChart />
      <SpendingChart />
    </div>
  );
};

export default HomePage;
import DiscoveryOfExoplanets from "@/components/DiscoveryOfExoplanets";
import Exoplanet from "@/components/Exoplanet";
import ExoplanetComparison from "@/components/ExoplanetComparison";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <ExoplanetComparison />
      </div>
      <div>
        <Exoplanet />
      </div>
      <div>
        <DiscoveryOfExoplanets />
      </div>
    </div>
  );
}

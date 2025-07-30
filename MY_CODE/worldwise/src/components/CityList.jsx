// import City from "./City";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";

import styles from "./CityList.module.css";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;

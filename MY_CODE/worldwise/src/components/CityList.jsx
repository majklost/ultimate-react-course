// import City from "./City";
import Spinner from "../components/Spinner";
import CityItem from "./CityItem";

import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { isLoading, cities, currentCity } = useCities();

  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem
          city={city}
          key={city.id}
          active={currentCity.id === city.id}
        />
      ))}
    </ul>
  );
}

export default CityList;

import Spinner from "../components/Spinner";
import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";

import styles from "./CountryList.module.css";
function CountriesList() {
  const { isLoading, cities } = useCities();
  if (isLoading) return <Spinner />;

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CountriesList;

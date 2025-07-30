import Spinner from "../components/Spinner";
import CityItem from "./CityItem";

import styles from "./CountryList.module.css";
function CountriesList({ cities, isLoading }) {
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

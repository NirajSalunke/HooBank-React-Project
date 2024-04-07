import { clients } from "../constants";
import styles from "../styles";

const Clients = () => (
  <section className={`${styles.flexCenter}  my-4`}>
    <div className={`flex-1 flex-row ${styles.flexCenter}  flex-warp w-full}`}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] `}
        >
          <img
            src={client.logo}
            alt="client"
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;

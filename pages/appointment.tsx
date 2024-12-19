import Image from "next/image";
import { useRouter } from "next/router";

import styles from "~/styles/appointment.module.scss";
import "react-calendar/dist/Calendar.css";

import Navbar from "@/component/navbar/navbar.component";
import Calendar from "react-calendar";

import routes from "@/helpers/routes";

const AppointmentPage = () => {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.detailsContainer}>
          <h1>Book your appointment</h1>

          <div>
            <div>
              <Image src="/images/massage-1.jpeg" alt="" fill sizes="100%" />
            </div>

            <p>Stress Reduction and Relaxation</p>

            <p>
              A potent resurfacing treatment using powerful exfoliation and
              renewal techniques to promote smoother, younger looking skin
              through targeting the signs of ageing and dull or uneven skin
              tones.
            </p>

            <div>
              <p>$124</p>

              <p>&nbsp;| 45 Minutes</p>
            </div>
          </div>
        </div>

        <div className={styles.calendarContainer}>
          <h2>Choose Date and Time</h2>

          <p>Selected Date:</p>

          <div>
            <Calendar />
          </div>

          <button
            type="button"
            onClick={() => {
              router.push(routes.confirm());
            }}
          >
            Confirm date
          </button>

          <button type="button">Cancel</button>
        </div>
      </section>
    </>
  );
};

export default AppointmentPage;

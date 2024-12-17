import Image from "next/image";

import styles from "~/styles/confirm.module.scss";

const ConfirmPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.detailsContainer}>
        <h1>Confirm your information</h1>

        <div>
          <p>Selected</p>

          <div>
            <Image src="/images/bg-1.jpeg" alt="" fill sizes="100%" />
          </div>

          <p>Stress Reduction and Relaxation</p>

          <div>
            <p>$124</p>

            <p>&nbsp;| 45 Minutes</p>
          </div>

          <div>
            <p>Appointment:</p>

            <p>Friday, July 12 | 16:00</p>
          </div>
        </div>
      </div>

      <div className={styles.formContainer}>
        <h2>Personal information</h2>

        <form>
          <div>
            <label htmlFor="fullName">Full Name(First and last name)</label>

            <input
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter names"
            />
          </div>

          <div>
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Enter phone number"
            />
          </div>

          <button type="button">Complete booking</button>

          <button type="button">Cancel</button>
        </form>
      </div>
    </section>
  );
};

export default ConfirmPage;

import Image from "next/image";

import styles from "~/styles/shop.module.scss";

import SvgIcon from "~/components/svg-icon/svg-icon.component";
import Navbar from "@/component/navbar/navbar.component";
import Footer from "@/component/footer/footer.component";

const categories = [
  { src: "/images/cat-1.jpeg", label: "Skin care" },
  { src: "/images/cat-2.jpeg", label: "Scents" },
  { src: "/images/cat-3.jpeg", label: "Candles" },
  { src: "/images/cat-4.jpeg", label: "Scents & Oils" },
  { src: "/images/cat-5.jpeg", label: "Supplements" },
  { src: "/images/cat-6.jpeg", label: "Sounds" },
];

const products = [
  {
    src: "/images/product-1.jpeg",
    name: "Maharishi - Essential Oil",
    amount: "$100",
  },
  { src: "/images/product-2.jpeg", name: "Massage gun", amount: "$100" },
  { src: "/images/product-3.jpeg", name: "Facial cleanser", amount: "$100" },
  {
    src: "/images/product-4.jpeg",
    name: "Vitamin B supplements",
    amount: "$100",
  },
  { src: "/images/product-5.jpeg", name: "Healing sound CD", amount: "$100" },
  {
    src: "/images/product-6.jpeg",
    name: "Sandal wood - scent",
    amount: "$100",
  },
  {
    src: "/images/product-7.jpeg",
    name: "Cherry - scented candle",
    amount: "$100",
  },
  { src: "/images/product-8.jpeg", name: "Pure essential oil", amount: "$100" },
];

const ShopPage = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <section className={styles.heroSection}>
          <div className={styles.heroContainer1}>
            <p>Essential oils</p>

            <h1>Your peace at home starts here</h1>

            <p>
              Discount <span>20% off</span> this week
            </p>

            <button>Shop now</button>

            <div>
              <Image src="/images/bg-2.png" alt="" fill sizes="100%" />
            </div>
          </div>

          <div className={styles.heroContainer2}>
            <Image src="/images/bg-1.jpeg" alt="" fill sizes="100%" />

            <div>
              <p>20% off</p>

              <p>on all skin care brand</p>

              <button>Start shopping</button>
            </div>
          </div>
        </section>

        <section className={styles.categoriesSection}>
          <h2>Shop by categories</h2>

          <div>
            {categories.map((el, i) => (
              <article key={i}>
                <div>
                  <Image src={el.src} alt="" fill sizes="100%" />
                </div>

                <p>{el.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.searchSection}>
          <form>
            <div>
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Find service"
              />

              <hr />

              <button type="button">
                <SvgIcon iconName="search" />
                Search
              </button>
            </div>

            <select>
              <option value="">Sort by</option>
            </select>
          </form>
        </section>

        <section className={styles.productsSection}>
          <div>
            {products.map((el, i) => (
              <article key={i} className={styles.product}>
                <div>
                  <div>
                    <Image src={el.src} alt="" fill sizes="100%" />
                  </div>

                  <div>
                    <SvgIcon iconName="heart" />
                  </div>
                </div>

                <p>{el.name}</p>

                <p>{el.amount}</p>
              </article>
            ))}
          </div>

          <button>Load more items</button>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ShopPage;

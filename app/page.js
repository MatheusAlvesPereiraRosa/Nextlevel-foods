import Link from "next/link";

import Styles from "./page.module.css"
import ImageSlideshow from "@/components/images/image-slideshow";


export default function Home() {
  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.slideshow}>
          <ImageSlideshow />
        </div>
        <div>
          <div className={Styles.hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={Styles.cta}>
            <Link href="/community">Join the community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main>

      </main>
    </>
  );
}

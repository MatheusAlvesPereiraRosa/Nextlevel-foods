import Link from 'next/link';
import Image from 'next/image';

import Styles from './meals-item.module.css';

export default function MealItem({ title, slug, image, summary, creator }) {
  return (
    <article className={Styles.meal}>
      <header>
        <div className={Styles.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={Styles.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={Styles.content}>
        <p className={Styles.summary}>{summary}</p>
        <div className={Styles.actions}>
          <Link href={`/meals/${slug}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}
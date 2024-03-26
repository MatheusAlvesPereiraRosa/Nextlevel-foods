import Image from 'next/image'
import Styles from './page.module.css'

import { notFound } from 'next/navigation'

import { getMeal } from '@/lib/meals'

/* Utilizado para auxiliar nos browsers de pesquisa */
export async function generateMetadata({params}) {
  const meal = getMeal(params.slug)

  if (!meal) {
    notFound()
  }
  
  return {
    title: meal.title,
    description: meal.summary
  }
}

export default function MealDetails({ params }) {
  const meal = getMeal(params.slug)

  if (!meal) {
    notFound()
  }

  meal.instructions = meal.instructions.replace(/\n/g, '<br/>')

  return (
    <>
      <header className={Styles.header}>
        <div className={Styles.image}>
          <Image src={meal.image} fill />
        </div>
        <div className={Styles.headerText}>
          <h1>{meal.title}</h1>
          <p className={Styles.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={Styles.summmary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p className={Styles.instructions} dangerouslySetInnerHTML={{
          __html: `${meal.instructions}`,
        }}></p>
      </main>
    </>
  )
}
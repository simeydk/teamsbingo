import React from "react"
import Card from '../components/flipcard'

import styles from './tabletopics.module.css'


const topics = [
  { front: 'demo', topic: 'Do you prefer Superman or Batman?' },
  { front: 1, topic: `My favourite superhero or tv show as a child` },
  { front: 2, topic: `You have 2 minutes to go back in time and talk to your 10 year old self` },
  { front: 3, topic: `What did you want to be when you grew up ` },
  { front: 4, topic: `If you could go back to preschool, primary school, high school, or university, which would you choose?` },
  { front: 5, topic: `What's one thing that was great when you were a child that is different now` },
  { front: 6, topic: `What is one thing that is great now that wasn't around when you were a child` },
  { front: 7, topic: `Explain your job to a 7 year old` },
]

export default () => <div>
  <div className={styles.page}>

    <div className={styles.grid}>
      {topics.map(({ front, topic }) =>
        <Card className={styles.card} >
          <Card.Front className={styles.front + ' ' + styles.side} >
            {front}
          </Card.Front>
          <Card.Back className={styles.back + ' ' + styles.side}>
            {topic}
          </Card.Back>
        </Card>
      )}
    </div>
  </div>
</div>
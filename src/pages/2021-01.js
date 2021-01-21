import React from "react"
import Card from '../components/flipcard'

import styles from './tabletopics.module.css'


const topics = [
  { front: 'demo', topic: 'Prevention is better than a cure' },
  { front: 1, topic: 'Is laughter the best medicine?' },
  { front: 2, topic: "Home remedies: tried and true or old wives tales" },
  { front: 3, topic: `Easy ways to look after your health` },
  { front: 4, topic: 'Road running: saving your heart or killing your knees?' },
  { front: 5, topic: 'It turned out well because I did my prep' },
  { front: 6, topic: `Some things just aren't preventable` },
  { front: 7, topic: 'I was not prepared for what happened next' },
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
import React from "react"
import Card from '../components/flipcard'

import styles from './tabletopics.module.css'


const topics = [
  { front: 'demo', topic: 'My best holiday memory as a child' },
  { front: 1, topic: 'The gift I always dreamed of as a child' },
  { front: 2, topic: `The most unusual gift I've ever received` },
  { front: 3, topic: 'Not all gifts come in wrapping paper' },
  { front: 4, topic: 'My favourite thing about December' },
  { front: 5, topic: 'If you could give any person any gift, what would you give and to who?' },
  { front: 6, topic: 'Why should we give' },
  { front: 7, topic: 'What are you thankful for?' },
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
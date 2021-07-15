import React from "react"
import Card from '../components/flipcard'

import styles from './tabletopics-olympics.module.css'


// const topics = [
//   { front: 1, topic: 'The gift I always dreamed of as a child' },
//   { front: 2, topic: `The most unusual gift I've ever received` },
//   { front: 3, topic: 'Not all gifts come in wrapping paper' },
//   { front: 4, topic: 'My favourite thing about December' },
//   { front: 5, topic: 'If you could give any person any gift, what would you give and to who?' },
//   { front: 6, topic: 'Why should we give' },
//   { front: 7, topic: 'What are you thankful for?' },
//   { front: 'demo', topic: 'My best holiday memory as a child' },
// ]


const topics = [
  {front: 1, topic: "Should the olympic logo be updated?", className: styles.blue},
  {front: 2, topic: "Which sport or event would you like to see added or removed from the olympics? ", className: styles.black},
  {front: 3, topic: "What is your favourite sport to watch, if any? ", className: styles.red},
  {front: 4, topic: "Professional Sport in COVID: Vital spirit booster or not worth the risk? ", className: styles.yellow},
  {front: 5, topic: 'If you could be "going to the Olympics good" in any event or sport, what would you choose?', className: styles.green},
  {front: 6, topic: "If you could safely travel to Japan or any other country right now, where would you go? "},
  {front: 7, topic: "What is the best thing ever to come out if Japan?"},
  {front: 'demo', topic: "Should Cape Town put in another bid to host the Olympics?", className: styles.demo},
]
export default () => <div>
  <div className={styles.page}>

    <div className={styles.grid}>
      {topics.map(({ front, topic, className="" }) =>
        <Card className={styles.card} >
          <Card.Front className={styles.front + ' ' + styles.side + ' ' + className} >
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
import React from "react"
import Card from '../components/flipcard'

export default () => <div>
  <Card>
    <Card.Front style={{background:'red'}}>
      Front
    </Card.Front>
    <Card.Back  style={{background:'blue'}}>
      Back
    </Card.Back>
  </Card>
  </div>
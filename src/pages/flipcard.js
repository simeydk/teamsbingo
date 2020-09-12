import React from "react"
import Card from '../components/flipcard'

import './flipcard.css'

export default () => <div>
  <div className='grid'>

    <Card>
      <Card.Front style={{ background: 'red' }}>
        Front
    </Card.Front>
      <Card.Back style={{ background: 'blue' }}>
        Back
    </Card.Back>
    </Card>

    <Card hover >
      <Card.Front style={{ background: 'red' }}>
        Front <br/>
        Front <br/>
        Front <br/>
        Front <br/>
        Front <br/>
        Front <br/>
    </Card.Front>
      <Card.Back style={{ background: 'blue' }}>
        Back
    </Card.Back>
    </Card>

    <Card horizontal>
      <Card.Front style={{ background: 'red' }}>
        Front
    </Card.Front>
      <Card.Back style={{ background: 'blue' }}>
        Back
    </Card.Back>
    </Card>
  </div>
</div>
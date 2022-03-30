import React from 'react'

import { Button} from 'btn-patika'
import 'btn-patika/dist/index.css'

const App = () => {
  return (
    <div className="container">
      <Button text="Default Button" />
      <Button text="Dashed Button" type="dashed" />
      <Button text="Primary Button" type="primary" />
      <Button text="Text Button" type="text" />
      <Button text="Link Button" type="link" />
    </div>
  )
}


export default App

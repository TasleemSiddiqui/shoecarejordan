'use client'

import { useTypewriter, Cursor } from 'react-simple-typewriter'

 const Typewriter = () => {
  const [text] = useTypewriter({
    words: ['KIDS', 'PROS', 'DREAMERS', 'WOMEN','TEAMS','COACHES','MEN','BEGINNERS','GIRLS','REBELS','ATHLETES']
    // loop: 3,
    // onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })

  return (
    <div className='App'>
      <span>{text}</span>
      <Cursor cursorColor='red' />
    </div>
  )
}
export default Typewriter;

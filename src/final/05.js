// useImperativeHandle: scroll to top/bottom
// http://localhost:3000/isolated/final/05.js

import * as React from 'react'

const Child = React.forwardRef((props, ref) => {
    const inputRef = React.useRef()

    React.useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus()
        }
    }))

    return <input value="text" ref={inputRef} readOnly />
})

const App = () => {
  const inputRef = React.useRef()

  const handleClick = () => inputRef.current.focus()

  return (
    <div>
      <Child ref={inputRef} />
      <button onClick={handleClick}>button</button>
    </div>
  );
}

export default App

const allMessages = [
  `Leia: Aren't you a little short to be a stormtrooper?`,
  `Luke: What? Oh... the uniform. I'm Luke Skywalker. I'm here to rescue you.`,
  `Leia: You're who?`,
  `Luke: I'm here to rescue you. I've got your R2 unit. I'm here with Ben Kenobi.`,
  `Leia: Ben Kenobi is here! Where is he?`,
  `Luke: Come on!`,
  `Luke: Will you forget it? I already tried it. It's magnetically sealed!`,
  `Leia: Put that thing away! You're going to get us all killed.`,
  `Han: Absolutely, Your Worship. Look, I had everything under control until you led us down here. You know, it's not going to take them long to figure out what happened to us.`,
  `Leia: It could be worse...`,
  `Han: It's worse.`,
  `Luke: There's something alive in here!`,
  `Han: That's your imagination.`,
  `Luke: Something just moves past my leg! Look! Did you see that?`,
  `Han: What?`,
  `Luke: Help!`,
  `Han: Luke! Luke! Luke!`,
  `Leia: Luke!`,
  `Leia: Luke, Luke, grab a hold of this.`,
  `Luke: Blast it, will you! My gun's jammed.`,
  `Han: Where?`,
  `Luke: Anywhere! Oh!!`,
  `Han: Luke! Luke!`,
  `Leia: Grab him!`,
  `Leia: What happened?`,
  `Luke: I don't know, it just let go of me and disappeared...`,
  `Han: I've got a very bad feeling about this.`,
  `Luke: The walls are moving!`,
  `Leia: Don't just stand there. Try to brace it with something.`,
  `Luke: Wait a minute!`,
  `Luke: Threepio! Come in Threepio! Threepio! Where could he be?`,
].map((m, i) => ({id: i, author: m.split(': ')[0], content: m.split(': ')[1]}))

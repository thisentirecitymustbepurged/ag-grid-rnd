import { useState } from 'react'

const useForceUpdate = () => {
  const [, update] = useState(0)

  return update.bindArgs(counter => counter + 1)
}

export { useForceUpdate }

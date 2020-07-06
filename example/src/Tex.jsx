import React, {useEffect} from 'react';
import { useGet } from 'test';

const Text = props => {
  const [ user, getUser ] = useGet('User');
  useEffect(() => {
    getUser({ params: { userId: 1 }})
  }, [])

  console.log({user});

  return (
    <div>hello world</div>
  )

}

export default Text

import React, { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { myNetwork, notification } from './atom'
import MyRecoil from './components/Recoils/MyRecoil'

const App = () => {
 return (
  <RecoilRoot>
    <MyRecoil />
  </RecoilRoot>
 )
  
}

export default App

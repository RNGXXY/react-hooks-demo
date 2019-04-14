import React,{useState,useEffect} from 'react'

export default function Page2({data,onHandleCount}){
  const [xx, setXx] = useState(data);
  useEffect(()=>{
    // console.log(onHandleCount)
    // setTimeout(()=>{
    //   setXx(data)
    //   console.warn(11)
    // },2000)
  })

  
const onPress = (data)=>{
  setXx(xx+1)
}

  return(
    <>
      <h2>data:{data}</h2>
      <hr/>
      <h1>xx:{xx}</h1>
      <button onClick={()=>{onPress(33)}}>xxxxxx</button>
      <button onClick={()=>{onHandleCount(44)}}>data</button>
    </>
  )
}

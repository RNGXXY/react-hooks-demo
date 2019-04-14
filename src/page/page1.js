import React,{ useState, useEffect } from 'react'


import Page2 from './page2'
function Page1 (){
  const [count, setCount] = useState(0);

  // 类似于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器API更新文档标题
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <Page2 
        data={count}
        onHandleCount={(data)=>{setCount(data)}}
      />
    </div>
  );
}


export default Page1

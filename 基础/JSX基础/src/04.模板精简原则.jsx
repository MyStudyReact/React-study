/**
 * 有一个状态 type 1 2 3
 * 1 ---> h1
 * 2 ---> h2
 * 3 ---> h3
 */

// 原则：模板中的逻辑尽量保持精简
/**
 * 复杂的多分支的逻辑 收敛为一个函数
 * 通过一个函数来写分支逻辑
 * 模板中只负责调用
 */

const getHTag = (type) => {
  if (type === 1) {
    return <h1>this is H1</h1>
  }
  if (type === 2) {
    return <h2>this is H1</h2>
  }
  if (type === 3) {
    return <h3>this is H1</h3>
  }
}

function App() {
  return (
    <div className="App">
      {getHTag(3)}
    </div>
  );
}

export default App;

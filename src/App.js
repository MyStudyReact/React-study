/**
 * 条件渲染
 * 技术方案：三元表达式（常用）/ 逻辑&&运算
 */

// 1. 三元表达式 ====> 满足条件才渲染一个span标签
const flag = false
function App() {
  return (
    <div className="App">
      {flag ? (
        <h1>
          <span>this is h1</span>
        </h1>) : null}

      {/* {true && <h2>this is h2</h2>} */}
      {false && <h2>this is h2</h2>}
    </div>
  );
}

export default App;

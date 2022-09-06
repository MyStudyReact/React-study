//1.识别常规的变量
const name = '达不溜'

//2.原生js方法调用
const getAge = () => {
  return 18
}

// 3.三元运算符(常用)
const flag = true

function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <h2>{getAge()}</h2>
      <h3>{flag ? '真棒' : '真菜'}</h3>
      {/* <button onClick={this.onClick}></button> */}
    </div>
  );
}

export default App;

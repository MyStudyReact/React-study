/**
 * React 如何完成列表渲染
 *
 * 技术方案：map 重复渲染的是哪个模板 就return谁
 *
 * 注意事项： 为了提高算法需要加key
 * key 仅仅再内部框架使用，不会出现再真实的dom结构中
 */
const unfinishedProject = [
  { id: 1, name: '问卷调查' },
  { id: 2, name: '主数据' },
  { id: 3, name: '计划系统' },
  { id: 4, name: '竞价系统' },
]

function App() {
  return (
    <div className="App">
      <ul>
        {unfinishedProject.map((project) => {
          return <li key={project.id}>{project.name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

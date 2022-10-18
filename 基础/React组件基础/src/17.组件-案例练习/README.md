# 练习说明
1.  拉取项目模板到本地，安装依赖，run起来项目
https://gitee.com/react-course-series/react-component-demo 
2.  完成tab点击切换激活状态交互 
3.  完成发表评论功能
注意：生成独立无二的id 可以使用  uuid 包  yarn add uuid 
```javascript
import { v4 as uuid } from 'uuid'
uuid() // 得到一个独一无二的id
```
import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {task, cate} = taskDetails
  return (
    <li className="list-item3">
      <p className="par3">{task}</p>
      <p className="pa3">
        {cate[0].toUpperCase() + cate.slice(1, cate.length).toLowerCase()}
      </p>
    </li>
  )
}
export default TaskItem

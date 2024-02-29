import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import OptionItem from '../OptionItem'
import TabItem from '../TabItem'
import TaskItem from '../TaskItem'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class Home extends Component {
  state = {task: '', cate: 'Health', taskList: [], basedOn: ''}

  onChangeTask = event => {
    this.setState({task: event.target.value})
  }

  onChangeOption = event => {
    this.setState({cate: event.target.value})
  }

  onChangeTabItem = value => {
    this.setState({basedOn: value})
  }

  onSubmitTask = event => {
    event.preventDefault()
    const {task, cate, taskList} = this.state
    const newObj = {
      id: uuidv4(),
      task,
      cate,
    }
    const newList = [...taskList, newObj]
    this.setState({task: '', cate: 'Health', taskList: newList})
  }

  render() {
    const {task, cate, taskList, basedOn} = this.state
    const filteredList = taskList.filter(ele =>
      ele.cate.toLowerCase().includes(basedOn.toLowerCase()),
    )

    return (
      <div className="bg-container">
        {/* <div className="inner-container"> */}
        <div className="card1">
          <h1 className="heading1">Create a task!</h1>
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="task">Task</label>
            <input
              value={task}
              className="user-input"
              type="text"
              id="task"
              placeholder="Enter the task here"
              onChange={this.onChangeTask}
            />
            <label htmlFor="tags">Tags</label>
            <select
              value={cate}
              className="user-input"
              onChange={this.onChangeOption}
              id="tags"
            >
              {tagsList.map(ele => (
                <OptionItem key={ele.optionId} optionDetails={ele} />
              ))}
            </select>
            <div className="cen">
              <button type="submit" className="button1">
                Add Task
              </button>
            </div>
          </form>
        </div>
        <div className="card2">
          <h1>Tags</h1>
          <ul className="list-container1">
            {tagsList.map(ele => (
              <TabItem
                key={ele.optionId}
                tabDetails={ele}
                onChangeTabItem={this.onChangeTabItem}
              />
            ))}
          </ul>
          <h1>Tasks</h1>
          {filteredList.length === 0 && <p>No Tasks Added Yet</p>}
          {filteredList.length !== 0 && (
            <ul className="list-container2">
              {filteredList.map(ele => (
                <TaskItem key={ele.id} taskDetails={ele} />
              ))}
            </ul>
          )}
        </div>
        {/* </div> */}
      </div>
    )
  }
}
export default Home

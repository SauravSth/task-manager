const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log('Running on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
	try {
		// const task = await Task.findById('61fe2a7707d99e28800fcd7e')
		// await task.populate('owner').execPopulate()
		// console.log(task.owner)
		const user = await User.findById('61fe27e2c09e56c94ca6fd2a')
		await user.populate('tasks')
		console.log(user.tasks)
	} catch (e) {
		console.log(e)
	}
}
main()

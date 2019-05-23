# Todos-api
I am using Node `restify` framework for `todos app` API

install dependies first by `npm install` and run command `node index.js` for run

You can also check demo on heroku server.
Url's are

1. for get todos list `https://todo-app-apis.herokuapp.com/task` with method `GET`

2. for get todo by id `https://todo-app-apis.herokuapp.com/task/:id` with method `GET`

3. for add todo `https://todo-app-apis.herokuapp.com/task` with mehtod `POST`

Sample JSON
```
{
	 "name": "req.params.name3",
    "description": "req.params.desc3",
    "dueDate": "2011-04-11"
}
```

4. for delete todo `https://todo-app-apis.herokuapp.com/task/:id` with method `DELETE`

5. for update todo `https://todo-app-apis.herokuapp.com/task/:id` with method `PUT`

Sample JSON
```
{
	 "name": "req.params.name3",
    "description": "req.params.desc3",
    "dueDate": "2011-04-11"
}
```

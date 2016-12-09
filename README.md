# React/Redux User Management Demo

> A User Management application demo written in React and Redux

This is a work-in-progress sample User Management Application built to hone my skills with React and Redux. This application
is comically-themed with data from [Game of Thrones](https://en.wikipedia.org/wiki/Game_of_Thrones), because Lorem Ipsum isn't much fun.
 Over time I will build in new features as I focus on different React development techniques, tooling, and best practices.
This is very much a work in progress, and has a few [bumps and bruises](https://github.com/radiovisual/react-redux-user-management-demo/issues). Pull requests welcome!

**LIVE DEMO:** [https://radiovisual.github.io/react-redux-user-management-demo/](https://radiovisual.github.io/react-redux-user-management-demo/)

![](media/demo.gif)

## Features

- [x] Create a user
- [x] Delete a user
- [x] Create a group
- [x] Delete a group
- [x] Add users to groups (via drag-n-drop)
- [x] Remove users from group
- [x] Search users
- [x] Search groups
- [x] View user profile
- [x] List groups members

## Usage

Everything in this app is controlled with the buttons you see on the interface (the `X` button will remove a user, a group, or a user from a group,
and the `View` button will show the user or group profile). The only exception to this is that you add users to a group by dragging and dropping the user
into the target group. If the member is not already a part of that group, he or she will be added to the group.
## Tools

Here are a few of the highlighted technologies used in this project, as well as a few anticipated technologies
that will work their way into this project in the future:

- [x] React
- [x] Redux
- [x] redux-thunk
- [x] redux-logger
- [x] reselect
- [x] Drag and Drop features (via react-dnd)
- [ ] Jest
- [ ] Redux Saga (or redux-loop)

## The Future

I spent some time designing a more interesting Interface, as well as some interesting features like a
console messaging system (which could be implemented with some Redux middleware), and I eventually want
to make the entire interface support drag and drop behaviors.

![](media/screenshot-future.jpg)

## License

MIT
import React from 'react'
import { useState, useEffect, useRef } from 'react'

import courseService from './services/courses'
import loginService from './services/login'
import usersService from './services/users'

import Notification from './components/Notification'
import storageService from './services/storage'
import LoginForm from './components/LoginForm'
import Menu from './components/Menu'
import CoursesList from './components/CoursesList'
import AddCoursePage from './components/AddCoursePage'
import CourseInfoPage from './components/CourseInfoPage'
import CompaniesList from './components/CompaniesList'
import RegisterPage from './components/RegisterPage'
import CompanyInfoPage from './components/CompanyInfoPage'

import {
  BrowserRouter as Router,
  Routes, Route
} from 'react-router-dom'
import Togglable from './components/Togglable'

const App = () => {
  const [courses, setCourses] = useState([])
  const [user, setUser] = useState('')
  const [info, setInfo] = useState({ message: null })
  const [users, setUsers] = useState([])

  const registerFormRef = useRef()

  useEffect(() => {
    const user = storageService.loadUser()
    setUser(user)
  }, [])

  useEffect(() => {
    courseService.getAll().then(courses =>
      setCourses( courses )
    )
  }, [])

  useEffect(() => {
    usersService.getAllUsers().then((users) => setUsers(users))
  }, [])

  const notifyWith = (message, type='info') => {
    setInfo({
      message, type
    })

    setTimeout(() => {
      setInfo({ message: null } )
    }, 3000)
  }

  const login = async (username, password) => {
    try {
      const user = await loginService.login({ username, password })
      setUser(user)
      storageService.saveUser(user)
      notifyWith('welcome!')
    } catch(e) {
      notifyWith('wrong username or password', 'error')
    }
  }

  const logout = async () => {
    setUser(null)
    storageService.removeUser()
    notifyWith('logged out')
  }

  const addCourse = async (newCourse) => {
    const addedCourse = await courseService.create(newCourse)
    notifyWith(`A new course '${newCourse.title}' by '${newCourse.company}' added`)
    setCourses(courses.concat(addedCourse))
  }

  const addUser = async (newUser) => {
    const addedUser = await usersService.create(newUser)
    notifyWith('A new user added')
    setUsers(users.concat(addedUser))
    registerFormRef.current.toggleVisibility()
  }

  const like = async (course) => {
    const courseToUpdate = { ...course, likes: course.likes + 1, user: course.user.id }
    const updatedCourse = await courseService.update(courseToUpdate)
    notifyWith(`A like for the blog '${course.title}'`)
    setCourses(courses.map(c => c.id === course.id ? updatedCourse : c))
  }

  if (!user) {
    return (
      <div className='container'>
        <h1>Want to enhance your skills?</h1>
        <h2>Log in to Micro Platform!</h2>
        <Notification info={info} />
        <LoginForm login={login} />
        <h3>Not a member yet? Register below!</h3>
        <Togglable buttonLabel='Register' ref={registerFormRef}>
          <RegisterPage addUser={addUser}/>
        </Togglable>
      </div>
    )
  }


  return (
    <Router>
      <div className='container'>
        <Menu user={user} logout={logout}/>
        <Notification info={info}/>
        <Routes>
          <Route path='/' element={<CoursesList courses={courses} />}/>
          <Route path='/addcourse' element={<AddCoursePage addCourse={addCourse}/>} />
          <Route path='/courses/:id' element={<CourseInfoPage courses={courses} like={like} />} />
          <Route path='/companies' element={<CompaniesList users={users}/>} />
          <Route path='/companies/:id' element={<CompanyInfoPage users={users}/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

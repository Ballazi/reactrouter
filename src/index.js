import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Navigate, NavLink, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
// import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/myApp" element={<Navigate replace to="/" />} />
      <Route exact path="/learn" element={<Learn />}>
        <Route exact path="courses" element={<Courses />} >
          <Route exact path=":courseid" element={<CourseId />} />
        </Route> 
        <Route exact path="bundles" element={<Bundles />} />
      </Route>
      <Route exact path="/dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);





function Home()
{
  return(
    <div>
      <h1>This is Home Component</h1>
      <Link className='btn btn-success' to="/learn">Learn</Link>
    </div>
  )
}

function Learn()
{
  return(
    <div>
      <h1>This is Learn Component</h1>
      <h4>All Courses are listed here</h4>
      <Link className='btn btn-success' to="/learn/courses">Course</Link> ||| {"  "}
      <Link className='btn btn-primary' to="/learn/bundles">Bundle</Link>
      
      <Outlet />

    </div>
  )
}


function Courses()
{
  const courseList = ["React","Angular","Vue","Nodejs"];
  const courseName = courseList[Math.floor(Math.random()*courseList.length)];
  return(
    <div>
      <h1>Course List</h1>
      <h4>Course Card</h4>

      <NavLink style={({isActive}) => { return {backgroundColor: isActive ? "Pink" : "yellow",textDecoration : "none"}}} to={`/learn/courses/${courseName}`}>{courseName}</NavLink>
    {"  "} ||| {"  "}
      <NavLink style={({isActive}) => { return {backgroundColor: isActive ? "Pink" : "yellow",textDecoration : "none"}}} to={`/learn/courses/test`}>Test</NavLink>




      <Outlet />
    </div>
  )
}


function Bundles()
{
  return(
    <div>
      <h1>Bundle List</h1>
      <h4>Bundle Card</h4>

    </div>
  )
}



function CourseId()
{
  const navigate = useNavigate();
  const {courseid} = useParams();
  return(
    <div>
      <h1>Course Id is : {courseid}</h1>
      <button onClick={() => navigate("/dashboard",{state:"399"})} className='btn btn-warning'>Price</button>
      <Link to="/dashboard" state={"DJANGO"}>Test</Link>
    </div>
  )
}



function Dashboard()
{
  const navigate = useNavigate();
  const price = useLocation();
  return(
    <div>
      <h1>course price : {price.state}</h1>
      <button className='btn btn-success' onClick={()=>navigate("/learn")}>Back</button>
    </div>
  )
}






reportWebVitals();

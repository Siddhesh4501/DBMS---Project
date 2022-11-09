import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Stats = lazy(() => import('./pages/Stats'));
const AddCompany = lazy(() => import('./pages/AddCompany'));
const AddExperience = lazy(() => import('./pages/AddExperience'));
const AddQue = lazy(() => import('./pages/AddQue'));
const AddAns = lazy(() => import('./pages/AddAns'));
const SeeAns = lazy(() => import('./pages/SeeAns'));
const login = lazy(() => import('./pages/Login'));
const companies = lazy(() => import('./pages/Companies'));
const addInterviewQuestions = lazy(() => import('./pages/AddInterviewQuestions'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/login" component={login} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/seedoubt" component={Stats} />
        <Route path="/contact" component={Contact} />
        <Route path="/add-company" component={AddCompany} />
        <Route path="/add-experience" component={AddExperience} />
        <Route path="/addque" component={AddQue} />
        <Route path="/addans/:id" component={AddAns} />
        <Route path="/seeans/:id" component={SeeAns} />
        <Route path="/companies" component={companies} />
        <Route path="/add-interview-questions" component={addInterviewQuestions} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;

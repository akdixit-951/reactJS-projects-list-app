// ccbp start RJSIVSFCBC

import {Component} from 'react'

import TabItem from './components/TabItem'
import ProjectItem from './components/ProjectItem'
import Header from './components/Header'

import './App.css'

const tabsList = [
  {tabId: 'STATIC', displayText: 'Static'},
  {tabId: 'RESPONSIVE', displayText: 'Responsive'},
  {tabId: 'DYNAMIC', displayText: 'Dynamic'},
]

const projectsList = [
  {
    projectId: 0,
    category: 'STATIC',
    imageURL:
      'https://assets.ccbp.in/frontend/static-website/flats-list-bg.png',
    title: 'Book Flats Website',
    description:
      'Book flats Website enables users to explore various flats and rent flats.',
    webUrl: 'https://dixitflatspage.ccbp.tech',
  },
  {
    projectId: 1,
    category: 'STATIC',
    imageURL:
      'https://assets.ccbp.in/frontend/static-website/yoga-girl-with-headphones-img.png',
    title: 'Yoga Page',
    description: 'Discover the yogi life on the Yoga Experience Platform',
    webUrl: 'https://dixityogapage.ccbp.tech',
  },
  {
    projectId: 2,
    category: 'STATIC',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/software-developer-img.png',
    title: 'My Static Projects Page',
    description:
      'Static Projects Website enables users to explore various static projects',
    webUrl: 'https://dixstatprojects.ccbp.tech',
  },

  {
    projectId: 3,
    category: 'RESPONSIVE',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-r2-img.png',
    title: 'Food Munch',
    description: 'Food Much Website is a user-centric food tech website.',
    webUrl: 'https://dixitfoodmunch.ccbp.tech',
  },
  {
    projectId: 4,
    category: 'RESPONSIVE',
    imageURL:
      'https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png',
    title: 'Fly Buy',
    description:
      'Created a static website that enable the user to browse through the products available on the website.',
    webUrl: 'https://dixitecomm.ccbp.tech',
  },
  {
    projectId: 5,
    category: 'RESPONSIVE',
    imageURL:
      'https://res.cloudinary.com/ddz3yejfj/image/upload/v1699340733/d4csqkvrm6u745rpx85a.jpg',
    title: 'Portfolio',
    description:
      'A portfolio is the best alternative for a resume to showcase your skills to the digital world.',
    webUrl: 'https://akashdportfolio.ccbp.tech',
  },

  {
    projectId: 6,
    category: 'DYNAMIC',
    imageURL:
      'https://png.pngtree.com/png-vector/20191005/ourmid/pngtree-checklist-on-to-do-list-form-illustration-with-man-signing-a-png-image_1794620.jpg',
    title: 'Todo List WebApp',
    description: 'Todo List Application enables you to create and manage tasks',
    webUrl: 'https://dixittodolist.ccbp.tech',
  },
  {
    projectId: 7,
    category: 'DYNAMIC',
    imageURL: 'https://i.insider.com/5fbd515550e71a001155724f?width=700',
    title: 'Wikipedia Search Application',
    description:
      'This is a dynamic web application enables you to search through wikipedia content.',
    webUrl: 'https://dixitwikipedia.ccbp.tech',
  },
  {
    projectId: 8,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png',
    title: 'Emoji Game',
    description:
      'Emoji game dynamic Web Application created with React JS, you will win the game if you click all the different emoji.',
    webUrl: 'https://dixitemojigame.ccbp.tech/',
  },
  {
    projectId: 9,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/projects-d1-img.png',
    title: 'Random Joke Page',
    description:
      'Random Joke Page is an API-based dynamic Web Application that generates a new joke.',
    webUrl: 'https://dixitrandomjoke.ccbp.tech',
  },
  {
    projectId: 10,
    category: 'DYNAMIC',
    imageURL:
      'https://techcrunch.com/wp-content/uploads/2022/07/app-store-ios-2022-b.jpg?w=1024',
    title: 'App Store',
    description:
      'This is a dynamic web application capable of filtering the apps according to user input using React JS manipulations.',
    webUrl: 'https://dixitappstore.ccbp.tech/',
  },
  {
    projectId: 11,
    category: 'DYNAMIC',
    imageURL:
      'https://play-lh.googleusercontent.com/XskKKrerCZPR5YH9iqSNNI9RmBedf_UN5KDr6ffeypSG-yn1dBi2yRoahttm9ENqvi-d',
    title: 'Money Manager',
    description:
      'using this web Application user can easily and smartly manage its money.',
    webUrl: 'https://dixmoneymanager.ccbp.tech/',
  },
  {
    projectId: 12,
    category: 'DYNAMIC',
    imageURL: 'https://assets.ccbp.in/frontend/react-js/shrubland-img.png',
    title: 'Destination Search',
    description:
      'This is a dynamic web application capable of filtering the destination according to user input using React JS packages.',
    webUrl: 'https://dixitdestsearch.ccbp.tech/',
  },
  {
    projectId: 13,
    category: 'DYNAMIC',
    imageURL:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    title: 'Appointments App',
    description:
      'This is a dynamic web application capable of creating and starring favorite appointments using React JS manipulations.',
    webUrl: 'https://dixitappoint.ccbp.tech/',
  },
  {
    projectId: 14,
    category: 'DYNAMIC',
    imageURL:
      'https://www.litmus.com/wp-content/uploads/2017/11/borderbutton.png',
    title: 'Making a button',
    description:
      'This is a dynamic web application capable of building the HTML button using DOM manipulations.',
    webUrl: 'https://dixbuttonmaker.ccbp.tech',
  },
]

class App extends Component {
  state = {
    activeTabId: tabsList[0].tabId,
  }

  updateActiveTabId = tabId => {
    this.setState({
      activeTabId: tabId,
    })
  }

  getFilteredProjects = () => {
    const {activeTabId} = this.state
    const filteredProjects = projectsList.filter(
      eachProjectDetails => eachProjectDetails.category === activeTabId,
    )

    return filteredProjects
  }

  render() {
    const {activeTabId} = this.state
    const filteredProjects = this.getFilteredProjects()

    return (
      <div className="app-container">
        <Header />
        <h1 className="title">Projects</h1>
        <p className="description">
          Your skills and achievements showcase your strengths and abilities.
          Speak about any new skills or software you learnt to perform the
          project responsibilities.
        </p>

        <ul className="tabs-container">
          {tabsList.map(tabDetails => (
            <TabItem
              key={tabDetails.tabId}
              tabDetails={tabDetails}
              updateActiveTabId={this.updateActiveTabId}
              isActive={activeTabId === tabDetails.tabId}
            />
          ))}
        </ul>

        <ul className="project-list-container">
          {filteredProjects.map(projectDetails => (
            <ProjectItem
              key={projectDetails.projectId}
              projectDetails={projectDetails}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App

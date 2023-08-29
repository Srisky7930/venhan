import {Component} from 'react'

import './index.css'

class App extends Component {
  state = {
    jsonData: `
        {
          "api": {
            "apigateway": "Api gateway",
            "lambda": "Lambda"
          },
          "mainServer": {
            "server": "Server",
            "lambda": "lambda"
          },
          "queue": "Queue",
          "queueList": {
            "work1": "worker1",
            "work2": "worker2",
            "work3": "worker3"
          }
        }
      `,
    parsedData: null,
  }

  componentDidMount() {
    const {jsonData} = this.state
    try {
      const parsedData = JSON.parse(jsonData)
      this.setState({parsedData})
    } catch (error) {
      console.error('Error parsing JSON:', error)
    }
  }

  render() {
    const {parsedData} = this.state

    if (!parsedData) {
      return <div>Loading...</div>
    }

    const {api, mainServer, queueList} = parsedData

    return (
      <div className="container">
        <div className="flow-1">
          <div className="card-1">
            <div className="box">
              <p>{api.apigateway}</p>
            </div>

            <div className="box">
              <p>{api.lambda}</p>
            </div>
          </div>

          <div className="vpn">
            <div className="main-server">
              <div className="box">
                <p> {mainServer.server}</p>
              </div>
              <div className="box">
                <p>{mainServer.lambda}</p>
              </div>
            </div>

            <div className="works">
              <h1 className="computer-nodes"> COMPUTER NODES </h1>
              <div className="box-work">
                <p>{queueList.work1}</p>
              </div>
              <div className="box-work">
                <p>{queueList.work2}</p>
              </div>
              <div className="box-work">
                <p>{queueList.work3}</p>
              </div>
            </div>
          </div>
          <div className="analytics">
            <p>Analytics </p>
          </div>
        </div>
      </div>
    )
  }
}

export default App

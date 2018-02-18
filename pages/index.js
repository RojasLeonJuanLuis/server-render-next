import React, { Component } from 'react'
import Header from '../components/header'
import withMui from '../shared/MUI/withMUI'
import 'isomorphic-fetch'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

class Index extends Component {

  static async getInitialProps() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await response.json()
    return { posts: data }
  }

  render() {
    return (
      <div>
        <Header />
        {
          this.props.posts.map(x =>
            <Card key={x.id}>
              <CardHeader title={x.title} />
              <CardText>
                <RaisedButton label="Click to view post!" fullWidth={true} primary={true} />
              </CardText>
            </Card>
          )
        }
      </div>
    )
  }
}

export default withMui(Index)

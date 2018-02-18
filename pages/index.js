import React, { Component } from 'react'
import Header from '../components/header'
import withMui from '../shared/MUI/withMUI'
import 'isomorphic-fetch'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'

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
                <RaisedButton fullWidth={true} primary={true}>
                  <Link href={`/post?id=${x.id}`} as={`/blog/${x.id}`}>
                    <a className="post-link">
                      Click to view post!
                    </a>
                  </Link>
                </RaisedButton>
              </CardText>
            </Card>
          )
        }
        <style jsx>{`
          .post-link {
            text-decoration: none;
            color: #ffffff;
            font-size: 18px;
          }
        `}</style>
      </div>
    )
  }
}

export default withMui(Index)

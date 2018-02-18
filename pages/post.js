import Header from '../components/header'
import withMui from '../shared/MUI/withMUI'
import 'isomorphic-fetch'
import { Card, CardText, CardHeader } from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'next/link'

const Post = ({ title, body }) =>
  <div>
    <Header />
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <RaisedButton fullWidth={true}>
          <Link href="/" as="/blog">
            <a>
              Go back to blog!
            </a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  </div>
Post.getInitialProps = async ({ query: { id } }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await response.json()
  console.log('Here is the data', data);
  const title = data.title
  const body = data.body
  return { title, body }
}
export default withMui(Post)

import Header from '../components/header'
import withMui from '../shared/MUI/withMUI'

const Index = ({ title = 'Hello from Next.js' }) => (
  <div>
    <h1>{title}</h1>
    <Header />
  </div>
)
export default withMui(Index)

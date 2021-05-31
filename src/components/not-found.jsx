import Layout from './shared/layout';

const NotFound = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center'
  }

  return (
    <Layout>
      <p style={style}>Unfortunately we can't find this page</p>
    </Layout>
  )
}

export default NotFound;
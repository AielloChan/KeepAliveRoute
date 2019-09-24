# KeepAliveRoute

React keep alive route implemented css display none

## Use

```reacttypescript
import KeepAliveRoute from '../components/KeepAliveRoute'


const App: React.FC = () => {
  return (
    <div className="App">
      <Route path="/home" component={Welcome} exact />
      <KeepAliveRoute path="/search" component={Search} keepAlive />
      <Route path="/edit" component={Label} />
    </div>
  )
}

export default App
```

Now, assume you searched something in "/search" page, and go to "/edit" page to edit some records, when you go back to "/search" page, your search result will still there( waitting for u 🙃.

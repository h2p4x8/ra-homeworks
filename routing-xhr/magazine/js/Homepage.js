class Homepage extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route path="/routing-xhr/magazine/article" component={ArticlePage}/>
          <Route path="/routing-xhr/magazine/subscribtion" exact component={SubscribtionPage}/>
          <Route path="/" component={WelcomPage}/>
        </ Switch>
      </div>
    );
  }
}

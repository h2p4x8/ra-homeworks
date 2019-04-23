const App = () => {
  return (
    <main className="container">
      {articles.map(el => <ArticlesOnReact article={el}/>)}
    </main>
  )
}

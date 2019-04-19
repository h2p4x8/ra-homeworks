const HeaderComponent = ({ location }) => {
  const articleId = location.pathname.match(/^\/article\/(\d+)\/?$/i);
  return (
    <nav className="navbar navbar-light bg-light">
      {articleId
        ? <p className="navbar-brand">Уникальный идентификатор статьи: {articleId[0].replace(/^\/article\//, '')}</p>
        : <p className="navbar-brand">Статья не выбрана</p>
      }
    </nav>
  )};

const {withRouter} = ReactRouterDOM;
const Header = withRouter(HeaderComponent);

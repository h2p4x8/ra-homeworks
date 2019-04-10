const navLinks = [
  {
    href: '/',
    name: 'Рефераты',
    exact: true
  },
  {
    href: '/creator',
    name: 'Криэйтор'
  },
  {
    href: '/fortune',
    name: 'Гадалка'
  },
]

const App = () => {
  const menu = navLinks.map((link) => <NavLink to={link.href}
                                                   className='tabs__item'
                                                   activeClassName='tabs__item-active'
                                                   exact={link.exact}>
                                        {link.name}
                                      </NavLink>)
  return(
    <Router>
      <div>
        <nav className='tabs__items'>
          {menu}
        </nav>
        <div className="tabs__content">
          <Route path="/" exact component={Essay} />
          <Route path="/creator" component={Creator} />
          <Route path="/fortune" component={Fortune} />
        </div>
      </div>
    </Router>
  )
}

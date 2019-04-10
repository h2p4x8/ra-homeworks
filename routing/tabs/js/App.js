const navLinks = [
  {
    href: '/',
    name: 'Рефераты',
    exact: true,
    component: Essay
  },
  {
    href: '/creator',
    name: 'Криэйтор',
    component: Creator
  },
  {
    href: '/fortune',
    name: 'Гадалка',
    component: Fortune
  },
]

const App = () => {
  const menu = navLinks.map( link => <NavLink to={link.href}
                                                   className='tabs__item'
                                                   activeClassName='tabs__item-active'
                                                   exact={link.exact}>
                                        {link.name}
                                      </NavLink>)

  const route = navLinks.map(comp => <Route path={comp.href} exact={comp.exact} component={comp.component} />)
  return(
    <Router>
      <div>
        <nav className='tabs__items'>
          {menu}
        </nav>
        <div className="tabs__content">
          {route}
        </div>
      </div>
    </Router>
  )
}

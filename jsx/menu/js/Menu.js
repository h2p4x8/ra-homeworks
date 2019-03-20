const Menu = function({items, opened = false}) {
  if (!opened) {
    return (
      <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>
    );
  } else {
    const links = items.map((item, index) => <li key ={index}><a href={item.href}>{item.title}</a></li>)
    return (
      <div className="menu menu-open">
        <div className="menu-toggle"><span></span></div>
        <nav>
          <ul>
            { links }
          </ul>
        </nav>
      </div>
    );
  }
}

function Layout(props) {
  return (
    <div>
      {/* Header */}
      <header>
        <h1>{props.title}</h1>
      </header>
      {/* main */}
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;

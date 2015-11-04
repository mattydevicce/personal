var HelloWorld = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello from React</h1>
      </div>
    )
  }
})
React.render(<HelloWorld />, document.body);
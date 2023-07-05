  function Body() {
    const [ count, setCount ] = React.useState(0);

    return (
      <main>
          <div>
            <h1>Hello with scripted React</h1>
            The current count is {count}
          </div>
          <div>
            <button onClick={() => setCount(count+1)}>increase</button>
            <button onClick={() => setCount(count-1)}>decrease</button>
          </div>
      </main>
    );
  }

  function App() {
    return (
      <div>
        <Body />
      </div>
    );
  }
  ReactDOM.render(<App />, document.getElementById('root'));
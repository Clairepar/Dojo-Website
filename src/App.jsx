function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'fantasy', color: 'navy' }}>
        {"Claire's website"}
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'purple',
          marginBottom: '10rem'
        }}
      >
        click the buttons below
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'green',
          color: 'yellow'
        }}
        onClick={() => alert('Hi.')}
      >
        Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'pink',
          color: 'blue',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '! Welcome!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
    </div>
  );
}

export default HomePage;

const App = () => {
  // Example 1: Basic JSX with variables
  const name = "React Lerner";
  const greeting = "Welcome to JSX";
  // Example 2: JSX with expression
  const num1 = 10;
  const num2 = 5;
  // Example 3: JSX with conditional Rendering
  const isLoggedin = true;
  // Example 4:JSX with Lists
  const fruits = ["Apple", "Banana", "Guava", "Pineapple"];
  return (
    <div>
      <h1>JSX Examples</h1>
      {/*Example 1: Basic jsx with variables*/}
      <section>
        <h2>1.Basic jsx with example</h2>
        {greeting},{name}
        <p>
          --JSX lets you insert Javascript expressions inside curly braces{"{}"}
        </p>
      </section>
      {/*Example 2: Basic jsx with expressions*/}
      <section>
        <h2>Basic jsx with expressions</h2>
        {num1}+{num2}={num1 + num2}
      </section>
      {/*Example 3: Basic jsx with Conditional rendering*/}
      <section>
        <h2>JSX with conditional Rendering</h2>
        {/* <p>{isLoggedin && <span>Welcome Back!</span>}</p> */}
        <p>
          {isLoggedin ? <span>Welcome Back!</span> : <span>Please LogIn!</span>}
        </p>
      </section>
      {/*Example 4: Basic jsx with Lists*/}
      <section>
        <h1>JSX With Lists</h1>
        <ul>
          {fruits.map((fruit, index) => {
            return <li key={index}>{fruit}</li>;
          })}
        </ul>
      </section>
    </div>
  );
};

export default App;

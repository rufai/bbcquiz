import HowToPlay from "./HowToPlay";
import "./style.css";

function App() {
  // ...

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Quiz startQuiz={startQuiz} />
            <HowToPlay />
          </Route>
          <Route path="/quiz">
            {quizStarted ? (
              <div>
                <Timer expiryTimestamp={expiryTimestamp} />
                <HowToPlay />
              </div>
            ) : (
              <div>You need to start the quiz first.</div>
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


import './App.css';

import Jokes from './Components/Jokes';
import ListItem from './Components/ListItem';

const JokesData1=[
  {
      setup: "I got my daughter a fridge for her birthday.",
      punchline: "I can't wait to see her face light up when she opens it."
  },
  {
      setup: "How did the hacker escape the police?",
      punchline: "He just ransomware!"
  },
  {
      setup: "Why don't pirates travel on mountain roads?",
      punchline: "Scurvy."
  },
  {
      setup: "Why do bees stay in the hive in the winter?",
      punchline: "Swarm."
  },
  {
      setup: "What's the best thing about Switzerland?",
      punchline: "I don't know, but the flag is a big plus!"
  }
]
const JokeD=JokesData1.map((data) =>
{
return <Jokes setup={data.setup} punchline={data.punchline} />})
function App() {
  return (
    <div className="App">
      {JokeD}
      <ListItem/>
    </div>
  );
}

export default App;

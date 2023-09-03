import Counter from "./Counter";
import "./App.css";
import Style from "./style";
import Users from "./Users";
function App() {
let usersData = {
  id:12, name:'Teddy', email:'teddy@.com'
}
const users = [
  {
    id:12, name:'Teddy', email:'teddy@.com'
  },
  {
    id:12, name:'Teddy', email:'teddy@.com'
  },
  {
    id:12, name:'Teddy', email:'teddy@.com'
  }
]

	return (
		<>
			<Style />
			<Counter />
      <Users users={users}/>
 		</>
	);
}

export default App ;

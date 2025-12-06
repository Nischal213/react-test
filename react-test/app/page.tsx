import Image from "next/image";
import Greeting from "./components/Greeting";
import Operation from "./components/Operation";
import DataTable from "./components/DataTable";

interface User {
  id: number;
  name: string;
  role: string;
  isActive: boolean;
}

const userData: User[] = [
  { id: 1, name: 'Alice', role: 'Admin', isActive: true },
  { id: 2, name: 'Bob', role: 'Editor', isActive: true },
  { id: 3, name: 'Charlie', role: 'Viewer', isActive: false },
];

export default function Home() {
  
  return (
    <div>
      <h1>TypeScript Component Demo</h1>
      
      {/* 1. Using the component with all required and optional props */}
      <Greeting 
        name="Alex" 
        isLoggedIn={true} 
        messageCount={5} 
      />

      {/* 2. Using the component with NO optional messageCount prop */}
      <Greeting 
        name="Sam" 
        isLoggedIn={true} 
      />

      {/* 3. Using the component when logged out (demonstrates conditional logic) */}
      <Greeting 
        name="Guest" 
        isLoggedIn={false} 
      />

      <Operation
        num1={10}
        op="+"
        num2={5}
      />

      <DataTable
        data={userData}
        caption={"Something"}
      />

    </div>
  );
}

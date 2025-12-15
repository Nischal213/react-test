import Image from "next/image";
import { Testing } from "./components/MyComponent";
import { StateHookExample } from "./components/StateHookExample";
import { MyDropDownComponent } from "./components/MyDropDownComponent";

export default function Home() {

  const array : string[] = ["Testing" , "Test"];
  
  return (
    <div>
      <h1>TypeScript Component Demo</h1>
      <MyDropDownComponent arr={array}>
      </MyDropDownComponent>
    </div>
  );
}

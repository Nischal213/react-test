import Image from "next/image";
import { Testing } from "./components/MyComponent";
import { StateHookExample } from "./components/StateHookExample";

export default function Home() {
  
  return (
    <div>
      <h1>TypeScript Component Demo</h1>
      <StateHookExample></StateHookExample>
    </div>
  );
}

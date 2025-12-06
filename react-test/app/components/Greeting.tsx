import React from 'react';

// ------------------------------------
// 1. Define the Props Interface (as shown above)
// ------------------------------------
interface GreetingProps {
  name: string;
  isLoggedIn: boolean;
  messageCount?: number; // Optional prop
}

// ------------------------------------
// 2. Define the Component
// ------------------------------------
// We use React.FC (Functional Component) and pass our interface to it.
const Greeting: React.FC<GreetingProps> = (props) => {
  // Destructure the props for cleaner access
  const { name, isLoggedIn, messageCount = 0 } = props;

  // Conditional Rendering based on a prop (isLoggedIn)
  if (!isLoggedIn) {
    return <h2>Please log in to see your dashboard.</h2>;
  }

  // Calculate a dynamic message based on a prop (messageCount)
  const messageText = messageCount > 0 
    ? `You have ${messageCount} new messages!`
    : "You have no new messages.";

  // The returned JSX
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px' }}>
      {/* Accessing a required prop */}
      <h2>👋 Hello, **{name}**!</h2>
      
      {/* Displaying a conditional message */}
      <p>{messageText}</p>

      {/* Accessing a required prop to show status */}
      <p>Status: **Logged In**</p>
    </div>
  );
};

export default Greeting;


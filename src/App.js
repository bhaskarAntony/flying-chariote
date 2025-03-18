import React, { useState } from 'react';
import { CaptureFinger, MatchFinger, VerifyFinger } from './mfs100';
import users from './users.json';


function App() {
  const [name, setName] = useState('');
  const [matchedUser, setMatchedUser] = useState(null);

  const getUserDetails = () => {
    const result = CaptureFinger(); // Capture new fingerprint
    if (result.httpStaus) {
        const capturedFingerprint = result.data.AnsiTemplate; // Get captured ASI fingerprint
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = users.find(user => {
            // const matchResult = MatchFinger(80, 10000, capturedFingerprint, user.fingerprint); // Pass captured and stored fingerprints
            // console.log(matchResult.data);
            // console.log(matchResult.httpStaus);
            // return matchResult.httpStaus && matchResult.data.MatchScore > 50; // Adjust threshold if needed
            let client = VerifyFinger(capturedFingerprint, user.fingerprint);
            console.log(client);
            if(client.data.Status){
              console.log(user);
              return true;
            }
            
        });
        console.log(matchedUser);

        if (matchedUser) {
            console.log("User found:", matchedUser);
            return matchedUser;
        } else {
            console.log("No matching user found");
            return null;
        }
    }
};

  

  const registerUser = (name) => {
    const result = CaptureFinger();
    
    if (result.httpStaus) {
    console.log(result);

      const newUser = {
        id: Date.now(),
        name,
        fingerprint: result.data.AnsiTemplate,
      };
  
      const users = JSON.parse(localStorage.getItem("users")) || [];
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
  
      console.log("User registered successfully", newUser);
    } else {
      console.error("Error capturing fingerprint");
    }
  };
  

  const handleRegister = () => {
    registerUser(name);
  };

  const handleMatch = () => {
    const user = getUserDetails();
    setMatchedUser(user);
  };
  

  return (
    <div>
      <input type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleRegister}>Register User</button>
      <button onClick={handleMatch}>Match Fingerprint</button>
      {matchedUser && <div>User Found: {matchedUser.name}</div>}
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function Name() {
  const [firstName, setFirstName] = useState('Thierry');

  return (
    <div>
      <input value={firstName} onInput={(e: React.FormEvent<HTMLInputElement>) => setFirstName(e.target.value)} />
      <p> My name is {firstName}</p>
    </div>
  );
}

export default Name;

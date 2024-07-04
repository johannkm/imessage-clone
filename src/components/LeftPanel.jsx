import React from 'react';

const LeftPanel = ({ theme, name, auth, signIn }) => {
  return (
    <div className="left-panel">
      {/* Content for left panel */}
      <div className="panel-content">
        <h3>{theme === 'ios' ? 'Settings' : 'Left Panel'}</h3>
        <form>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </form>
        {!auth ? <button onClick={() => signIn()}>Sign in</button> : <p>Signed in</p>}
      </div>
    </div>
  );
}

export default LeftPanel;

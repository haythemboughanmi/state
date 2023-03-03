import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'houssem haddad ',
      bio: 'unknown',
      imgSrc: '',
      profession: 'Web Developer'
    },
    showProfile: false
  }

  toggleProfile = () => {
    this.setState(prevState => ({
      showProfile: !prevState.showProfile
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { showProfile } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {showProfile ? 'Hide Profile' : 'Show Profile'}
        </button>
        {showProfile &&
          <div>
            <h1>{fullName}</h1>
            <img src={imgSrc} alt="profile" />
            <p>{bio}</p>
            <h2>{profession}</h2>
          </div>
        }
      </div>
    );
  }
}

export default App;


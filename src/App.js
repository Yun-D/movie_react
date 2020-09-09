import React from 'react';

class App extends React.Component {
  state = {
    isLoading: true, //로딩 상태값을 저장하는 변수. 컴포넌트가 마운트되면 true
    movies: [], //로딩한 영화데이터를 저장할 배열
  };

  componentDidMount() {
    //영화 데이터 로딩
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 6000);
  }

  render() {
    const {isLoading} = this.state; 

    return (
      <div>
        {isLoading ? 'Loading...' : 'We are ready'}
      </div>
      );
  }
}

export default App;

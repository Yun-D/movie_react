import React from 'react';

class Detail extends React.Component {
    componentDidMount() {
        const {location, history} = this.props;

        //만약 location.state가 없다면 Home으로 이동
        if (location.state === undefined) {
            history.push('/');
        }
    }

    render() {
        const { location } = this.props;

        if (location.state) {
            return (
                <div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
                    <span> {location.state.title} </span>
                </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Detail;
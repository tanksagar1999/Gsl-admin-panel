import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';
import { homeOperations } from './operations';

const mapStateToProps = state => {
    const { subredditData, showSpinner } = state.home;
    const { count } = state.home;
    return { count, subredditData, showSpinner }
};

const mapDispatchToProps = dispatch => {
    // '1' is the number by which you want to increment the count
    const onIncrementClick = () => {
        dispatch(homeOperations.incrementCount(1));
    };

    const onDecrementClick = () => {
        dispatch(homeOperations.decrementCount(1));
    };

    const fetchSubreddits = (subreddit) => {
        dispatch(homeOperations.fetchSubreddits(subreddit))
    };

    return {
        onIncrementClick,
        onDecrementClick,
        fetchSubreddits
    }
};

const HomeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export default HomeContainer;
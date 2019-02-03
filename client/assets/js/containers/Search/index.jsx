import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSearch } from '../../actions/search';
import Search from '../../components/Search';

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    fetchSearch,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(Search);

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCity } from '../../actions/cities';
import Result from '../../components/Result';

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addCity,
    },
    dispatch,
  );

export default connect(
  null,
  mapDispatchToProps,
)(Result);

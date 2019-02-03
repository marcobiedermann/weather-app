import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSettings } from '../../actions/settings';
import Settings from '../../components/Settings';

const mapStateToProps = state => ({
  language: state.settings.language,
  unit: state.settings.unit,
});

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    updateSettings,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

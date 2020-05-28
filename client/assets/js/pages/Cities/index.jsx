import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import CityPage from './City';
import EditPage from './Edit';
import Cities from '../../components/Cities';

const CitiesPage = (props) => {
  const { cities, match } = props;
  const { t } = useTranslation();

  return (
    <Switch>
      <Route path={`${match.path}/edit`} component={EditPage} />
      <Route path={`${match.path}/:cityId`} component={CityPage} />
      <Route
        path={match.path}
        render={() => (
          <div>
            <Helmet>
              <title>Cities</title>
            </Helmet>
            <Cities cities={cities} />
            <Link to={`${match.path}/edit`}>{t('translation:edit')}</Link>
          </div>
        )}
      />
    </Switch>
  );
};

CitiesPage.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape({
    path: PropTypes.string,
  }),
};

CitiesPage.defaultProps = {
  cities: [],
  match: null,
};

const mapStateToProps = ({ cities }) => ({
  cities,
});

export default connect(mapStateToProps)(CitiesPage);

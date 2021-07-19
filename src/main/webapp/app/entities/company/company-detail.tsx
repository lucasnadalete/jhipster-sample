import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { getEntity } from './company.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

export const CompanyDetail = (props: RouteComponentProps<{ id: string }>) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEntity(props.match.params.id));
  }, []);

  const companyEntity = useAppSelector(state => state.company.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="companyDetailsHeading">
          <Translate contentKey="iacitSampleApp.company.detail.title">Company</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="iacitSampleApp.company.id">Id</Translate>
            </span>
          </dt>
          <dd>{companyEntity.id}</dd>
          <dt>
            <span id="name">
              <Translate contentKey="iacitSampleApp.company.name">Name</Translate>
            </span>
          </dt>
          <dd>{companyEntity.name}</dd>
          <dt>
            <span id="cnpj">
              <Translate contentKey="iacitSampleApp.company.cnpj">Cnpj</Translate>
            </span>
          </dt>
          <dd>{companyEntity.cnpj}</dd>
          <dt>
            <span id="language">
              <Translate contentKey="iacitSampleApp.company.language">Language</Translate>
            </span>
          </dt>
          <dd>{companyEntity.language}</dd>
          <dt>
            <Translate contentKey="iacitSampleApp.company.country">Country</Translate>
          </dt>
          <dd>{companyEntity.country ? companyEntity.country.id : ''}</dd>
          <dt>
            <Translate contentKey="iacitSampleApp.company.state">State</Translate>
          </dt>
          <dd>{companyEntity.state ? companyEntity.state.id : ''}</dd>
          <dt>
            <Translate contentKey="iacitSampleApp.company.city">City</Translate>
          </dt>
          <dd>{companyEntity.city ? companyEntity.city.id : ''}</dd>
        </dl>
        <Button tag={Link} to="/company" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/company/${companyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CompanyDetail;

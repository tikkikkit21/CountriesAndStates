import React from 'react';
import Country from '../Country';
import State from '../State';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GetData({code, update, onChange}) {
    return (
        <Container>
            <h1 className="text-center pt-2 pb-3">Lookup Data</h1>
            <Row className="d-flex justify-content-center">
                <Col className="p-2" xs={7} sm={5} md={4} lg={3}>
                    <Country
                        id="countries"
                        code={code}
                        update={update}
                        value="code"
                        onChange={onChange}
                    />
                </Col>
                <Col className="p-2" xs={7} sm={5} md={4} lg={3}>
                    <State id="states"
                        code={code}
                        update={update}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default GetData;
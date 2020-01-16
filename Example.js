import React from 'react';
import {
  Button,
  ButtonDropdown, ButtonGroup,
  Card,
  Row,
  Dropdown,Container,
  CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Table
} from "reactstrap";


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isDropdownOpen:false,
      dropDownValue:'Select'}
  }
  onChangeDropdown(e){
    this.setState({dropDownValue: e.currentTarget.textContent})
  }
  render() {
    const {dropDownValue,isDropdownOpen}=this.state;
    return (
      <Container>
        <Container>
          <Row xs="2" sm="2" md="2">
            <Col xs="6" sm="6" md="6">
              <h3>Performance</h3>
            </Col>
            <Col xs="6" sm="6" md="6">
              <Dropdown isOpen={isDropdownOpen} toggle={()=>this.setState({isDropdownOpen: !this.state.isDropdownOpen})}>
                <DropdownToggle caret>
                  {dropDownValue}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem><div onClick={(e)=>this.onChangeDropdown(e)}>Value 1</div></DropdownItem>
                  <DropdownItem><div onClick={(e)=>this.onChangeDropdown(e)}>Value 2</div></DropdownItem>
                  <DropdownItem><div onClick={(e)=>this.onChangeDropdown(e)}>Value 3</div></DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <div className="sener-tile">
          <div className="sener-hdg-div">

            <div className="Card">
              <h4>Top Performers</h4>
              <Table hover responsive className="mb-0 d-none d-sm-table">
                <thead className="">
                <tr>
                  <th></th>
                  <th>Station</th>
                  <th>Volume</th>
                  <th>Revenue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <p>1.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>3.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                </tbody>
              </Table>
            </div>
            <Card className="">
              <h4>Low Performers</h4>
              <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                <thead className="">
                <tr>
                  <th></th>
                  <th>Station</th>
                  <th>Volume</th>
                  <th>Revenue</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>
                    <p>1.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>2.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>3.</p>
                  </td>
                  <td>
                    <p>Gacoco#342</p>
                  </td>
                  <td className="text-center">
                    <p>4000Lts</p>
                  </td>
                  <td>
                    <p>$500,000</p>
                  </td>
                </tr>
                </tbody>
              </Table>
            </Card>
          </div>

        </div>
      </Container>
    )
  }
}

export default Example;

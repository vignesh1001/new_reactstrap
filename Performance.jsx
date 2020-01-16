import React from "react";
import {
  Button,
  ButtonDropdown,
  ButtonGroup,
  Card,
  Row,
  Dropdown,
  Container,
  CardBody,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Table
} from "reactstrap";

const styles = {
  container: {
    backgroundColor: "#f6f6f6",
    padding: 10,
    marginTop: 5,
    borderRadius: 10
  },
  top_performance_card: {
    marginTop: 10,
    padding: 10,
    boxShadow: "0px 0px 1px 1px #98d198",
    border: "1px solid #98d198"
  },
  top_performance_header: {
    paddingLeft: 10
  },
  low_performance_card: {
    marginTop: 10,
    padding: 10,
    boxShadow: "0px 0px 1px 1px #fa03039c ",
    border: "1px solid #fa03039c"
  },
  low_performance_header: {
    paddingLeft: 10
  },
  inputStyle: {
    backgroundColor: "#FFF",
    color: "#000",
    padding: "5px 8px",
    margin: "2px 6px",
    borderRadius: 10,
    fontWeight: 600
  }
};
class Performance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWeekDDOpen: false,
      weekDDValue: "This Week",
      topperList: [
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" },
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" },
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" },
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" }
      ],
      lowerList: [
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" },
        { stationNm: "Gacoco#342", volume: "4000Lts", revenue: "$500,000" }
      ]
    };
  }
  onChangeDropdown(e) {
    this.setState({ weekDDValue: e.currentTarget.textContent });
  }
  render() {
    const { weekDDValue, isWeekDDOpen, topperList, lowerList } = this.state;
    const renderTable = list => (
      <Table hover responsive className="mb-0 d-sm-table">
        <thead className="">
          <tr>
            <th className="border-top-0" />
            <th className="border-top-0">Station</th>
            <th className="border-top-0">Volume</th>
            <th className="border-top-0">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {list.map((object, index) => (
            <tr>
              <td>
                <p>{index + 1}.</p>
              </td>
              <td>
                <p>{object.stationNm}</p>
              </td>
              <td>{object.volume}</td>
              <td>
                <p>{object.revenue}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
    return (
      <Container style={styles.container}>
        <Container>
          <Row xs="2" sm="2" md="2">
            <Col xs="6" sm="6" md="6" className="p-0">
              <h3>Performance</h3>
            </Col>
            <Col xs="6" sm="6" md="6" className="p-0 text-right">
              <Button className="float-right" style={styles.inputStyle}>
                View All
              </Button>
              <Dropdown
                className="float-right pr-10"
                isOpen={isWeekDDOpen}
                toggle={() =>
                  this.setState({ isWeekDDOpen: !this.state.isWeekDDOpen })
                }
              >
                <DropdownToggle caret style={styles.inputStyle}>
                  {weekDDValue}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <div onClick={e => this.onChangeDropdown(e)}>This Week</div>
                  </DropdownItem>
                  <DropdownItem>
                    <div onClick={e => this.onChangeDropdown(e)}>Last Week</div>
                  </DropdownItem>
                  <DropdownItem>
                    <div onClick={e => this.onChangeDropdown(e)}>
                      Last 2 Weeks
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
        <div className="sener-tile">
          <div className="sener-hdg-div">
            <Card style={styles.top_performance_card}>
              <h4 style={styles.top_performance_header}>Top Performers</h4>
              {renderTable(topperList)}
            </Card>
            <Card style={styles.low_performance_card}>
              <h4 style={styles.low_performance_header}>Low Performers</h4>
              {renderTable(lowerList)}
            </Card>
          </div>
        </div>
      </Container>
    );
  }
}

export default Performance;

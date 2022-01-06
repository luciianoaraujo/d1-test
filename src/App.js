import "./App.css";
import journey from "./api/journey.js";
import filter from "./api/filter.js";
import logo from "./img/logo.png";
import logod1 from "./img/logod1.png";
import { Component } from "react";
import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    filter: [],
    journey: [],
  };

  async componentDidMount() {
    const rest_j = await journey.get('');
    const rest_f = await filter.get("");

    this.setState({ journey: rest_j.data });
    this.setState({ filter: rest_f.data });
  }

  async handleClick(id) {
    console.log("clicou");
    if (id == 0){
      const rest_j = await journey.get('');
      this.setState({ journey: rest_j.data });
    }
    else{
      const rest_j = await journey.get(`${id}`);
      this.setState({ journey: rest_j.data });
    }
  }

  render() {
    const { journey } = this.state;
    const { filter } = this.state;

    return (
      <div className="page">
        <div className="menu">
          <div className="logod1">
            <img src={logod1} alt="Logod1" />
          </div>
        </div>
        <div className="content">
          <div className="header">
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            <div className="search">
              <form>
                <label>
                  <input placeholder="Buscar" className="input" type="text" />
                </label>
                <Button className="btn-new-journey">+ Nova Jornada</Button>
              </form>
            </div>
          </div>
          <div className="container">
            <div className="filter-container">
              <div className="title">Jornadas:</div>
              <div className="filter">
                {filter.map((filter) => (
                  <div
                    className="filter-item"
                    key={filter.name}
                    onClick={() => this.handleClick(filter.id)}>
                    <span>{filter.name}</span>
                    <span className="cont">{filter.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="journey-container">
              <div className="journey">
                <div className="journey-head">
                  <div className="journey-item">
                    <span>Nome</span>
                    <span>Destinatários</span>
                    <span>Sucesso</span>
                    <span>Status</span>
                  </div>
                </div>
                <div className="journey-body">
                  {journey.map((journey) => (
                    <div className="journey-item-body" key={journey.name}>
                      <span>{journey.name}</span>
                      <span>{journey.recipients}</span>
                      <span>{journey.success}</span>
                      <span>{journey.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

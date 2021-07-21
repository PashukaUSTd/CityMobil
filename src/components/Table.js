import React, { Component } from 'react';
import axios from 'axios';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
import { BootstrapTable, TableHeaderColumn, } from 'react-bootstrap-table';
import Search from './Search';
import Display from './Display';
import prepareData from '../helpers/prepare-data';
import search from '../helpers/search';
import tariffsList from '../data/tariffs'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            request: '',
            cars: [],
            selected: '',
            options: {
                onRowClick: function (row) {
                    row = Object.values(row).filter(el => el !== '-').join(' ');
                    this.setState({ selected: row + ' год' });
                }.bind(this)
            }
        }
        this.getCars = this.getCars.bind(this);
    }

    componentDidMount() {
        this.getCars();
    }

    getCars = function () {
        axios.get('https://city-mobil.ru/api/cars').then(
            data => {
                this.setState({ cars: data.data.cars })
            }
        )
    }

    updateRequest = (value) => {
        this.setState({ request: value });
    }

    render() {
        return (
            <div className="table-container">
                <Search updateRequest={this.updateRequest}></Search>
                <BootstrapTable data={search(prepareData(this.state.cars, tariffsList), this.state.request)}
                    options={this.state.options} bordered hover>
                    <TableHeaderColumn isKey dataSort={true} dataField='markAndModel'>
                        Марка и модель
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataAlign='center' dataField='Эконом'>
                        Эконом
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataAlign='center' dataField='Комфорт'>
                        Комфорт
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataAlign='center' dataField='Комфорт+'>
                        Комфорт+
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataAlign='center' dataField='Минивен'>
                        Минивен
                    </TableHeaderColumn>
                    <TableHeaderColumn dataSort={true} dataAlign='center' dataField='Бизнес'>
                        Бизнес
                    </TableHeaderColumn>
                </BootstrapTable>
                <Display selected={this.state.selected} />
            </div>
        );
    }
}

export default Table;
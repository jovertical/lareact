import React, { Component } from 'react';
import {
    DataTable,
    TableHeader,
    TableBody,
    TableRow,
    TableColumn,
    TablePagination,
} from 'react-md';

import MasterTemplate from '../templates/MasterTemplate';

class Index extends Component {
    state = {
        loading: false,
        pagination: {},
    };

    paginationHandler = (from, perPage, page) => {
        this.fetchAdmins({ perPage, page });

        this.setState(prevState => {
            return {
                pagination: {
                    loading: true,
                    ...prevState.pagination,
                    current_page: page,
                    per_page: perPage,
                },
            };
        });
    };

    fetchAdmins(params = {}) {
        this.setState({ loading: true });

        axios
            .get('/api/admins', {
                params: {
                    perPage: _.has(params, 'perPage') ? params.perPage : null,
                    page: _.has(params, 'page') ? params.page : null,
                },
            })
            .then(response => {
                this.setState(prevState => {
                    return {
                        loading: false,
                        pagination: response.data,
                    };
                });
            });
    }

    componentWillMount() {
        this.fetchAdmins();
    }

    render() {
        const headers = ['Firstname', 'Lastname', 'Email'];
        const { data, total, current_page, per_page } = this.state.pagination;

        return (
            <MasterTemplate pageTitle="Admins" loading={this.state.loading}>
                {this.state.loading ? null : (
                    <DataTable baseId="admins">
                        <TableHeader>
                            <TableRow selectable={false}>
                                {headers.map((header, i) => (
                                    <TableColumn key={i}>{header}</TableColumn>
                                ))}
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {data.map(admin => (
                                <TableRow key={admin.id} selectable={false}>
                                    <TableColumn>{admin.firstname}</TableColumn>
                                    <TableColumn>{admin.lastname}</TableColumn>
                                    <TableColumn>{admin.email}</TableColumn>
                                </TableRow>
                            ))}
                        </TableBody>

                        <TablePagination
                            rows={total}
                            onPagination={this.paginationHandler}
                            page={current_page}
                            rowsPerPage={per_page}
                        />
                    </DataTable>
                )}
                )
            </MasterTemplate>
        );
    }
}

export default Index;

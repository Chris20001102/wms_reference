import React, { Component } from 'react';
import { Container, Table } from 'reactstrap';
import MyNavbar from './MyNavbar';
import 'bootstrap/dist/css/bootstrap.css';

class Product extends Component {

	constructor(props) {
		super(props);
		this.state = { products: [] };
	}

	componentDidMount() {
		fetch('api/products').then(response => response.json())
			.then(data => this.setState({ products: data }));
	}

	render() {
		const { products } = this.state;

		const productList = products.map(product => {
			return <tr key={product.productID}>
                <td>{product.productID}</td>
                <td>{product.productPrice}</td>
                <td>{product.productName}</td>
                <td>{product.productType}</td>
			</tr>
		});

		return (
			<div>
				<MyNavbar />
				<Container fluid>
					<h3>Product</h3>
					<Table className="mt-4">
						<thead>
							<tr>
                                <th>ID</th>
								<th>Price</th>
								<th>Name</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							{productList}
						</tbody>
					</Table>
				</Container>
			</div>
		);
	}

}
export default Product;
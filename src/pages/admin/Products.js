import { Table, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Products = ()=>{
    return(
        <Card className="border-0 shadow-lg">
            <Card.Header className="border-top-0 p-3 d-flex align-items-center justify-content-between">
                <Card.Title className="m-0">Products List</Card.Title>
                <Link to="/admin/add-product" className="btn btn-success text-capitalize">add product</Link>
            </Card.Header>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    )
}

export default Products;
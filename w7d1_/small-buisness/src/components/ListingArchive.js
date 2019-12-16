import React from 'react'
// import { Link } from 'react-router-dom'
import { 
	Container,
	// Typography,
	Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'


const ListingsTable = ( props ) => {
	
    return (
		<Container maxWidth="md">
			<Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Open Hours</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.business.map( ( listing, index ) => (
                    <TableRow key={listing.id}>
                        <TableCell component="th" scope="row">
                            {listing.id}
                        </TableCell>
                        <TableCell>
							{listing["name"]}
						</TableCell>
                        <TableCell>
							{listing["description"]}
						</TableCell>
                        <TableCell>
							{listing["hours"]}
						</TableCell>
                        <TableCell>
							{listing["address"]}
						</TableCell>
                        <TableCell>
                            <DeleteIcon
                                // onClick={() => props.removeCar(index)}
                                className="icon text-red" />
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
		</Container>
    )
}

export default ListingsTable
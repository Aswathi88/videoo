import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { deleteHis, getAllHistory } from '../services/allApis';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function History() {

    //state
    const [histories, sethistories] = useState([])

    const getHistories = async () => {
        const { data } = await getAllHistory()
        sethistories(data);
        getHistories()
    }
    useEffect(() => {
        getHistories()
    }, [])
    console.log(histories);

    const removeHistory = async (id) => {
        const result = await deleteHis(id)
        if (result.status >= 200 && result.status < 300) {
            // refresh category list
            getAllHistory()
        }

    }


    return (
        <div>
            <h3 className='text-center text-danger p-4' style={{ fontFamily: 'monospace' }}> Watch History</h3>
            {histories.length > 0 ? (
                <Table className='w-75 container mb-5' striped bordered hover variant="secondary">
                    <thead className='text-center fs-4'>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Title</th>
                            <th>Videourl</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            histories?.map((i, index) =>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{i?.date}</td>
                                    <td>{i?.video_title}</td>
                                    <td>{i?.url}</td>

                                    <td className='text-center'><Trash2 onClick={() => { removeHistory(i?.id) }} size={70} className='btn text-dark'></Trash2>
                                    </td>
                                </tr>

                            )
                        }
                    </tbody>
                </Table>


            ) : <h3 className='text-center p-5'>No Watch History</h3>
            }

            <Link to={'/home'}>
                <Button variant="dark"  className='border-black ms-3 text-center'>Go Back</Button>
                <hr />
            </Link>

        </div>
    )
}

export default History
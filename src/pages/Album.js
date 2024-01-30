import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Loading from '../components/Loading.js'


function Album(){

    const [album, setAlbum] = useState([]);

    useEffect(() => {
        
        axios.get(`http://127.0.0.1:8000/api/album`).then(res => {
            console.log(res)
            setAlbum(res.data.album);

        });
       
    }, [])
    
    var albumDetails = "";
    albumDetails = album.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.AlbumId}</td>
                <td>{item.NamaAlbum}</td>
                <td>{item.Deskripsi}</td>
                <td>{item.TanggalDibuat}</td>
                <td>{item.UserId}</td>
                <td>
                    <Link to="/" className="btn btn-success">Edit</Link>
                </td>
                <td>
                    <button className="btn btn-danger">Delete</button>
                </td>

            </tr>
        )

    });


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="card-header">
                    <h4> Album 
                        <Link to="/" className="btn btn-primary float-end">Add album</Link>
                    </h4>
                 </div> 
                 <div className="table table-striped">
                    <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Album Id</th>
                            <th>Nama Album</th>
                            <th>Deskripsi</th>
                            <th>Tanggal Dibuat</th>
                            <th>User Id</th>
                            <th>edit</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                    </table>

                 </div>

            </div>
        </div>
    )



}
export default  Album;
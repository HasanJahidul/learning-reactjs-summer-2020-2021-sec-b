import { useState } from "react";
import { useParams } from "react-router-dom";


const AddUser = ({ status, callback }) => {
    const { id: eid } = useParams();
    const { name: ename } = useParams();
    const { dept: edept } = useParams();
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [dept, setDept] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        callback({ id: id, name: name, dept: dept });
    };
    
    return (
        
        <div>

            
            <h2>
                This is {status} user page id: {eid}
            </h2>
            <form onSubmit={onSubmit}>
                <label>
                    Id:
                    <input
                        type="text"  name="name" placeholder={eid} value={id} onChange={(e) => setId(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Name:
                    <input type="text" name="name"placeholder={ename} value={name} onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Department:
                    <input input type="text" name="name" placeholder={edept} value={dept}  onChange={(e) => setDept(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
        
        
            
    );
};

export default AddUser;
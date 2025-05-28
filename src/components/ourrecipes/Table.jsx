import Rows from "./Rows";


const Table = ({wcook, HendlerCooking}) => {
    
    
    
    return (
        
            <table>
                <thead>
                    <tr className="flex gap-10 ml-12 mb-4 mt-6">
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                </tr>
                </thead>
                <tbody>
                    {
                        Array.isArray(wcook) && wcook.map((wcook, idx)=> <Rows key={idx} HendlerCooking={HendlerCooking} wcook={wcook}></Rows>)
                    }
                </tbody>
            </table>
        
    );
};

export default Table;
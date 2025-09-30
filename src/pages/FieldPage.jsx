import { useSelector } from "react-redux"
import { Navigate,useParams } from "react-router-dom"
import { useEffect , useState } from "react"
import {fields} from "../data/fields.js"


const FieldPage = ()=>{
    const { token } = useSelector((state) =>state.auth)

    const {id} = useParams();
    const [loading, setLoading] = useState(false)
    const [field,setField] = useState([])

    // console.log(id)

    useEffect(() => {
        const fetchField = () => {
          const res = fields.filter((field) => {
            return field.id === parseInt(id);
          });
          setField(res[0]);
        };
        fetchField();
      }, [id, fields]);

      // console.log(field)


    if(token ===  null){
        return <Navigate to="/login" />
    }
    
    if (loading) {
        return (
          <div className="grid flex-1 place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
    
      return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
          <div className="bg-richblack-900 rounded-lg shadow-md p-4">
            <h1 className="text-3xl font-bold mb-4 text-white">{field.name}</h1>
            <p className="text-lg font-medium text-gray-300 text-white">{field.description1}</p>
          </div>
        </div>
      );
}
export default FieldPage
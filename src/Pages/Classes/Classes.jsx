import { useEffect, useState } from "react";
import ClassesCard from "./ClassesCard";
import Headings from "../../Componants/Headings";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useDispatch, useSelector } from "react-redux";
import { getClasses } from "../../redux/classSlice";

const Classes = () => {
  const dispatch = useDispatch()
  const totalClasses = useSelector(state => state.classes.classes)
  const [searchValue, setSearchValue] = useState("");
  const [classes, setClasses] = useState([]);
  const [axiosSecure] = useAxiosSecure();


  useEffect(() => {
    axiosSecure
      .get(`classes`)
      .then((response) => {
        setClasses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [classes]);

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axiosSecure.get("classes");
        dispatch(getClasses(response.data));
      } catch (err){
        console.log(err)
      }      
    }
    fetchData();
  },[])

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredClasses = classes?.filter((classes) => {
    const className = classes.name.toLowerCase();
    const instructorName = classes.instructor.toLowerCase();
    const searchLower = searchValue.toLowerCase();
    return (
      className.includes(searchLower) || instructorName.includes(searchLower)
    );
  });

  return (
    <div>
      <Headings heading={"See Our Classes"}></Headings>
      <div>
        <h1 className="text-2xl font-bold text-center m-3">Total Classes: {totalClasses.length}</h1>
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="Search Courses"
          className="input input-bordered"
          required
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 m-auto p-6">
        {filteredClasses.map((allClass) => (
          <ClassesCard key={allClass._id} allClass={allClass}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;

import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

    const useStudentClass = () => {
    const { user } = useContext(AuthContext);
    const { data: myClasses =[], refetch } = useQuery({
        queryKey: ["myselectedclasse",user?.email],
        queryFn: async () => {
        const response = await fetch(
            `http://localhost:5000/myselectedclasses?email=${user?.email}`
        );
        return response.json();
        },
    });
    
    return [myClasses, refetch]
    };

export default useStudentClass;

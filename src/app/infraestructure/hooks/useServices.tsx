"use client";

import { IServicesResponse } from "@/app/core/application/dto";
import { EndPointService } from "@/app/core/application/model";
import { useEffect, useState } from "react";

export const useServices = () => {
    const [data, setData] = useState<IServicesResponse | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getServices = async (page: number = 1, size: number = 6) => {
        const response = await fetch(`${EndPointService.GET_SERVICE}?page=${page}&size=${size}`);
        if(!response.ok) {
            console.error('Error getting services:', response.statusText);
            return;
        }
        const data = await response.json();
        setData(data);
        setCurrentPage(data.number + 1);
        setTotalPages(data.totalPages);
    };

    useEffect(()=>{
        getServices(currentPage);
    },[currentPage])

    return {
        data,
        currentPage,
        totalPages,
        getServices,
        setCurrentPage
    }
}
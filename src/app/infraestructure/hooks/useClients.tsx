"use client";

import { IClientResponse } from "@/app/core/application/dto";
import { EndPointClients } from "@/app/core/application/model";
import { useEffect, useState } from "react";

export const useClients = () => {
    const [data, setData] = useState<IClientResponse | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const getClients = async (page: number = 1, size: number = 20) => {
        const response = await fetch(`${EndPointClients.GET_CLIENT}?page=${page}&size=${size}`);
        if(!response.ok) {
            console.error('Error getting clients:', response.statusText);
            return;
        }
        const data = await response.json();
        setData(data);
        setCurrentPage(data.number + 1);
        setTotalPages(data.totalPages);
    };

    useEffect(()=>{
        getClients(currentPage);
    },[currentPage])

    return {
        data,
        currentPage,
        totalPages,
        getClients,
        setCurrentPage
    }
}
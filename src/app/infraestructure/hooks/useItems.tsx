"use client";

import {
  IClient,
  IService,
} from "@/app/core/application/dto";
import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useModalContext } from "../context/modal-context";
import Swal from "sweetalert2";

type ItemType = IService | IClient ;

interface UseItemsProps<T> {
  endpoint: string;
  editComponent: ReactElement;
}

interface PaginatedResponse<T> {
  content: T[];
  totalPages: number;
  number: number;
}

export const useItems = <T extends ItemType>({
  endpoint,
  editComponent,
}: UseItemsProps<T>) => {
  const [data, setData] = useState<PaginatedResponse<T> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const { openModal, setModalContent } = useModalContext();

  const getItems = async (page: number = 1, size: number = 9) => {
    const response = await fetch(`${endpoint}?page=${page}&size=${size}`);
    if (!response.ok) {
      console.error("Error getting data:", response.statusText);
      return;
    }
    const data: PaginatedResponse<T> = await response.json();
    setData(data);
    setCurrentPage(data.number + 1);
    setTotalPages(data.totalPages);
  };

  // useEffect(() => {
  //   getItems(currentPage);
  // }, [currentPage]);

  const handleEdit = useCallback(
    (itemData: T) => {
      setModalContent(React.cloneElement(editComponent, {itemData}));
      openModal();
    },
    [setModalContent, openModal, editComponent]
  );

  const handleDelete = useCallback(
    async (itemData: T, onDeleteSuccess?: () => void) => {
      const confirm = await Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás deshacer esta acción.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      });

      if (confirm.isConfirmed) {
        try {
          const response = await fetch(
            `${endpoint}/${itemData.id}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            Swal.fire("Eliminado", "El elemento ha sido eliminado.", "success");
            if (onDeleteSuccess) {
              onDeleteSuccess();
            }
            getItems(currentPage);
          } else {
            Swal.fire("Error", "Error al eliminar el elemento.", "error");
          }
        } catch (error) {
          console.error("Error al eliminar el elemento:", error);
          Swal.fire("Error", "Error al eliminar el elemento.", "error");
        }
      }
    },
    [currentPage, getItems]
  );

  return {
    data,
    currentPage,
    totalPages,
    getItems,
    setCurrentPage,
    handleEdit,
    handleDelete,
  };
};

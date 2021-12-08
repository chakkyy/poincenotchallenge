import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { resetList } from "../../redux/actions";

export function Title() {
  const dispatch = useDispatch();

  const handleResetList = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Your actual list will be deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(resetList());
        Swal.fire("Done!", "Your list has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <h1>To-do List</h1>
      <button onClick={handleResetList}>New List</button>
    </>
  );
}

import React from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { resetList } from "../../redux/actions";
import "./Title.scss";

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
    <div className="title__container">
      <h1 className="title__text">To-do List</h1>
      <button onClick={handleResetList} className="newlist__btn">
        New List
      </button>
    </div>
  );
}

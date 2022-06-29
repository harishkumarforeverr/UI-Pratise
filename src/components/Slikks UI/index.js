import React from "react";
import AddVisibility from "./AddVisibility/AddVisibility";
import CreateShare from "./CreateShare/CreateShare";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Kanban from "./kanban/Kanban";
import TaskManager from "./TaskManager/TaskManager";
import Testimonial from "./Testimonial/Testimonial";
import TimeManagement from "./TimeManagement/TimeManagement";

const Sikks = () => {
  return (
    <div>
      <div className="App">
        <Header />
        <AddVisibility />
        <TimeManagement />
        <TaskManager />
        <Kanban />
        <CreateShare />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
};
export default Sikks;

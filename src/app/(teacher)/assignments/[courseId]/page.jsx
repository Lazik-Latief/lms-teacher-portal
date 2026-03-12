import CourseHeader from "@/components/assignments/CourseHeader";
import AssignmentTable from "@/components/assignments/AssignmentTable";
import AssignmentStats from "@/components/assignments/AssignmentStats";

export default function CourseAssignmentsPage() {

  const assignments = [
    {
      title: "Trigonometry Basics",
      due: "15 Mar, 2024",
      submissions: 32,
      pending: 8,
      avg: "82%",
      status: "Open"
    },
    {
      title: "Quadratic Equations",
      due: "18 Mar, 2024",
      submissions: 20,
      pending: 6,
      avg: "-",
      status: "Draft"
    },
    {
      title: "Coordinate Geometry",
      due: "10 Mar, 2024",
      submissions: 45,
      pending: 0,
      avg: "76%",
      status: "Closed"
    }
  ];

  return (
    <div className="space-y-10 ">

        {/* Header */}  
        <CourseHeader />

      {/* Assignment Table */}
      <AssignmentTable assignments={assignments} />

      {/* Stats */}
      <AssignmentStats />

    </div>
  );
}
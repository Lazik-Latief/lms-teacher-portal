import AssignmentRow from "./AssignmentRow";

export default function AssignmentTable({ assignments }) {
  return (
    <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden">

      <table className="w-full text-left">

        <thead className="text-gray-400 text-sm border-b border-white/10">
          <tr>
            <th className="p-5">Assignment Title</th>
            <th>Due Date</th>
            <th>Submissions</th>
            <th>Pending Reviews</th>
            <th>Avg. Grade</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {assignments.map((a, i) => (
            <AssignmentRow key={i} data={a} />
          ))}

        </tbody>

      </table>

    </div>
  );
}
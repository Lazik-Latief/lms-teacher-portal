export default function AssignmentRow({ data }) {
  return (
    <tr className="border-b border-white/5 hover:bg-white/5 transition">

      <td className="p-5 font-medium">
        {data.title}
      </td>

      <td>{data.due}</td>

      <td>{data.submissions}</td>

      <td>
        {data.pending > 0 ? (
          <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-lg text-xs">
            {data.pending} Pending
          </span>
        ) : (
          <span className="text-green-400 text-sm">
            Completed
          </span>
        )}
      </td>

      <td className="text-green-400">
        {data.avg}
      </td>

      <td>
        <StatusBadge status={data.status} />
      </td>

    </tr>
  );
}

function StatusBadge({ status }) {

  if (status === "Open")
    return <span className="text-green-400">Open</span>;

  if (status === "Closed")
    return <span className="text-red-400">Closed</span>;

  return <span className="text-gray-400">Draft</span>;
}
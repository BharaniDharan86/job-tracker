function TableHead() {
  return (
    <thead className="uppercase text-slate-900 py-2 text-sm">
      <tr>
        <th>Company Name</th>
        <th>Position</th>
        <th className="hidden sm:table-cell">Status</th>
        <th className="hidden sm:table-cell">Location</th>
        <th className="hidden sm:table-cell">Date Applied</th>
        <th></th>
      </tr>
    </thead>
  );
}

export default TableHead;

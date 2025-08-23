import { useState, useMemo } from "react";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";
import Pagination from "react-bootstrap/Pagination";

export default function ArticlesPage() 
{
  const data = [
     { title: "Opening Lines that Hook", status: "Published", days: 4 },
    { title: "Cliffhangers Done Right", status: "Draft", days: 9 },
    { title: "Scenes that Breathe", status: "Published", days: 6 },
    { title: "Narrative Arcs Explained", status: "Archived", days: 21 },
    { title: "The Art of Pacing", status: "Draft", days: 13 },
    { title: "Writing Relatable Heroes", status: "Published", days: 2 },
    { title: "The Antagonist’s Perspective", status: "Draft", days: 15 },
    { title: "Dialogue Tags that Work", status: "Published", days: 5 },
    { title: "Tone and Atmosphere", status: "Published", days: 7 },
    { title: "Point of View Shifts", status: "Draft", days: 11 },
    { title: "Writing With Subtext", status: "Published", days: 3 },
    { title: "Chapters that Flow", status: "Draft", days: 16 },
    { title: "Building Tension Gradually", status: "Archived", days: 27 },
    { title: "The Power of Silence", status: "Published", days: 1 },
    { title: "Writing Compelling Endings", status: "Draft", days: 14 },
    { title: "Evolving Character Arcs", status: "Published", days: 8 },
    { title: "The Weight of Setting", status: "Draft", days: 12 },
    { title: "Myth and Legend in Fiction", status: "Archived", days: 35 },
    { title: "Scenes of Introspection", status: "Published", days: 10 },
    { title: "Metaphors that Matter", status: "Draft", days: 18 }
  ];

  const [page, setPage] = useState(1);
  const pageSize = 5;
  const totalPages = Math.ceil(data.length / pageSize);

  const rows = useMemo(() => {
    const start = (page - 1) * pageSize;
    return data.slice(start, start + pageSize);
  }, [page]);

  const badge = (s) => (
    <Badge pill bg={s === "Published" ? "success" : s === "Draft" ? "warning" : "secondary"}>
      {s}
    </Badge>
  );

  return (
    <>
      <h1 style={{ marginBottom: 16 }}>My Articles</h1>

      <Table hover bordered>
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Last Edited</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td>{r.title}</td>
              <td>{badge(r.status)}</td>
              <td className="text-muted">{r.days} days ago</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination>
          <Pagination.Prev
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          />
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <Pagination.Item key={n} active={n === page} onClick={() => setPage(n)}>
              {n}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          />
        </Pagination>
      </div>
    </>
  );
}

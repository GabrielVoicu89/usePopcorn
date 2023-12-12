export default function MovieDetail({ selectedId, onCloseMovie }) {
  return (
    <div className="details">
      <button className="btn-back" onClick={onCloseMovie}>
        ⬅
      </button>
      {selectedId}
    </div>
  );
}

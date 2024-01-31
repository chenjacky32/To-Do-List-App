function Status({ stats }) {
  const totalitem = stats.length;
  const doneitem = stats.filter((item) => item.done).length;
  const percentage = Math.round((doneitem / totalitem) * 100);

  if (doneitem === 0) {
    return (
      <footer className="stats">
        <span>Silakan isi catatannya </span>
      </footer>
    );
  }
  return (
    <>
      <footer className="stats">
        <span>{percentage === 100 ? "Catatan sudah diselesaikan" : ` Kamu punya ${totalitem} catatan yg dichecklist ${doneitem} item persentase ${percentage} %`}</span>
      </footer>
    </>
  );
}

export default Status;

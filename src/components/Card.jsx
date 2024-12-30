function Card({ index }) {
  return (
    <div className="card">
      <div className="cover-image">
        <img src="https://placehold.co/300x300/png" />
      </div>
      <div className="blog-content">
        <p>
          {index == 2
            ? "لورم ایپسوم متن ساختگی"
            : "لورم ایپسوم متن ساختگی لورم ایپسوم متن ساختگی"}
        </p>
        <small>1403/05/18</small>
      </div>
    </div>
  );
}

export default Card;
